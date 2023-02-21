import styleText from "data-text:../app.css";
import type { PlasmoGetStyle } from "plasmo";
import type { PlasmoCSConfig } from "plasmo";


export const config: PlasmoCSConfig = {
    matches: ["https://scm.jbhunt.com/shipper/ngx/dashboard", "https://www.google.com/"],
    all_frames: true
}

export const getStyle: PlasmoGetStyle = () => {
    const style = document.createElement("style")
    style.textContent = styleText
    return style
}

const data = [
    {
        "bidId": "51008-0",
        "carrier": "RDFS",
        "amount": {
            "fullAmount": 1842.86,
            "netAmount": 1842.86
        },
        "transitTime": "6",
        "guranteed": true,
        "vendorLogo": "https://content.mycarriertms.com/carriers/d5700f5d-ae85-4119-b4c0-b0d14ad08da4.png",
        "deliveryDate": "2023-03-02",
        "vendorQuoteId": "603201",
        "vendorName": "Roadrunner Freight",
        "carrierName": "Roadrunner Freight",
        "carrierCode": "RDFS",
        "carrierQuoteId": "603201",
        "quoteId": "51008",
        "carrierID": 1070
    },
    {
        "bidId": "51008-1",
        "carrier": "CLNI",
        "amount": {
            "fullAmount": 375.08,
            "netAmount": 375.08
        },
        "transitTime": "7",
        "guranteed": true,
        "vendorLogo": "https://content.mycarriertms.com/carriers/89ea3c55-14a7-4e4c-9256-a9f84ece6b2e.png",
        "deliveryDate": "2023-03-03",
        "vendorName": "Clear Lane Freight Systems",
        "carrierName": "Clear Lane Freight Systems",
        "carrierCode": "CLNI",
        "quoteId": "51008",
        "carrierID": 1079
    },
    {
        "bidId": "51008-2",
        "carrier": "XPOL",
        "amount": {
            "fullAmount": 452.6,
            "netAmount": 452.6
        },
        "transitTime": "8",
        "guranteed": true,
        "vendorLogo": "https://content.mycarriertms.com/carriers/29f70c94-378e-4828-9765-07b678ea0d22.png",
        "deliveryDate": "2023-03-06",
        "vendorQuoteId": "6350468922982",
        "vendorName": "XPO LTL",
        "carrierName": "XPO LTL",
        "carrierCode": "XPOL",
        "carrierQuoteId": "6350468922982",
        "quoteId": "51008",
        "carrierID": 1085
    }
];

const Example = () => {
    return (
        <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0"></div>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        <div class="pointer-events-auto w-screen max-w-2xl">
                            <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div class="px-4 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <div class="ml-3 flex h-7 items-center">
                                            <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                    {/* Start */}
                                    {data.map(item => (
                                    <div class="px-6 lg:px-8">
                                        <div class="sm:flex sm:items-center">
                                            <div class="sm:flex-auto">
                                                <h1 class="text-xl font-semibold text-gray-900">{item['carrier']}</h1>
                                                <img src={item['vendorLogo']}></img>
                                                {/* <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p> */}
                                            </div>
                                            {/* <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                                <button type="button" class="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add user</button>
                                            </div> */}
                                        </div>
                                        <div class="mt-8 flow-root">
                                            <div class="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
                                                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                                    {/* <Table /> */}
                                                    
                                                    <table class="min-w-full divide-y divide-gray-300">
                                                        {/* {for (const ke)} */}
                                                        <tbody class="divide-y divide-gray-200">
                                                            <tr>
                                                                <td class="font-bold whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Bill ID</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['bidId']}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Full Amount</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">${item['amount']['fullAmount']}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Net Amount</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">${item['amount']['netAmount']}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Transit Time</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['transitTime']}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Guranteed?</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{(item['guranteed'] ? "Yes" : "No")}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Delivery Date</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['deliveryDate']}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Vendor Name</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['vendorName']}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Carrier Name</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['carrierName']}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Carrier Code</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['carrierCode']}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Quote ID</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['quoteId']}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Carrier ID</td>
                                                                <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item['carrierID']}</td>
                                                            </tr>

                                                            <tr>
                                                                <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Go
</button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                {/* End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;