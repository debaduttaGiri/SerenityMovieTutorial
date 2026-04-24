namespace SereneMovieTutorial.Common {

    export interface BuyerModel {
        BuyerName: string;
        Qty: number;
        Revenue: number;
        Margin: number;
    }
    export interface VendorOutstandingModel {
        label: string;
        vendorOut: number;
    }

    const COLORS = ['#00d4aa', '#4f9cf9', '#f0a500', '#f05b5b', '#a78bfa', '#34d399', '#fb923c', '#60a5fa', '#f472b6', '#818cf8'];

    export function VendorOutstanding(): void {

        jQuery.ajax({
            url: '/Dashboard/GetVendorOutstanding',
            type: 'GET',
            success: function (data: VendorOutstandingModel[]) {
                console.log("GetVendorOutstanding " +"Called")
                if (!data || !data.length) {
                    console.warn("No vendor data");
                    return;
                }
                console.log( "Data"+data);
                renderBars(
                    'vendor-bars',
                    data,
                    d => d.vendorOut,   // ✔ FUNCTION instead of string
                    d => d.label,
                    '#ffffff',
                    fmt
                );
            }
        });
    } VendorOutstanding();

    function renderBars<T>(
        containerId: string,
        data: T[],
        valFn: (d: T) => number,
        labelFn: (d: T) => string,
        color?: string,
        fmtFn?: (n: number) => string,
        maxVal?: number
    ) {

        const el = document.getElementById(containerId);
        if (!el) {
            console.error(`Element not found: ${containerId}`);
            return;
        }

        const max = maxVal || Math.max(...data.map(valFn));

        el.innerHTML = data.map((d, i) => {

            const value = valFn(d);

            return `
               <div class="bar-row">
                 <div class="bar-label" title="${labelFn(d)}">${labelFn(d)}</div>
                 <div class="bar-track">
                   <div class="bar-fill"
                        style="width:${(value / max * 100).toFixed(1)}%;
                               background:${color || COLORS[i % COLORS.length]}">
                   </div>
                 </div>
                 <div class="bar-val">${(fmtFn || fmt)(value)}</div>
               </div>`;
        }).join('');
    }
    function fmt(n: number): string {
        n = Number(n); // safety

        if (n >= 1e7) return '₹' + (n / 1e7).toFixed(2) + ' Cr';
        if (n >= 1e5) return '₹' + (n / 1e5).toFixed(1) + ' L';
        return '₹' + n.toFixed(0);
    }

    //$(function () {
    //    SereneMovieTutorial.Common.loadBuyers();
    //});
    //SereneMovieTutorial.Common.loadBuyers();
    loadBuyers();
    export function loadBuyers(): void {
        console.log("loadBuyers called");
        jQuery.ajax({
            url: '/Dashboard/GetTopBuyers',
            type: 'GET',
            success: function (data: BuyerModel[]) {
                console.log("API data:", data);
                const tb = document.getElementById('buyer-table');
                if (!tb) return;

                tb.innerHTML = data.map(b => {

                    const mp = ((b.Margin / b.Revenue) * 100).toFixed(1);

                    let chipClass =
                        parseFloat(mp) > 15 ? 'chip-green' :
                            parseFloat(mp) > 10 ? 'chip-blue' :
                                'chip-gold';

                    return `
                      <tr>
                      <td>${b.BuyerName}</td>
                      <td>${b.Qty}</td>
                      <td>${b.Revenue}</td>
                      <td>${b.Margin}</td>
                      <td><span class="chip ${chipClass}">${mp}%</span></td>
                      </tr>`;
                }).join('');
            }
        });
    }
}