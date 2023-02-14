import styleText from "data-text:../app.css";
import type { PlasmoGetStyle } from "plasmo";
import { screen } from '@testing-library/react';
import { within } from "@testing-library/dom";


export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/shipmentinfo"]
}

// const handleClick = () => {
//   if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/rates") {
//     console.log(localStorage.getItem("data"));
//   } else if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/shipmentinfo") {
//     const items = document.querySelectorAll("[formcontrolname]");

//     const pickup_location = items[0].childNodes[0].childNodes[0].value;
//     const pickup_date = items[1].childNodes[0].childNodes[0].value;
//     const pickup_additional_services = [];

//     const pickup_additional_services_elems = document.querySelectorAll('[multiselectcontrolname]')[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes;
//     for (const elem of pickup_additional_services_elems) {
//       if (elem.nodeName === "DIV") {
//         pickup_additional_services.push(elem.childNodes[0].innerHTML);
//       }
//     }

//     const delivery_location = items[2].childNodes[0].childNodes[0].value;
//     const delivery_additional_services = [];

//     const delivery_additional_services_elems = document.querySelectorAll('[multiselectcontrolname]')[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes;
//     for (const elem of delivery_additional_services_elems) {
//       if (elem.nodeName === "DIV") {
//         delivery_additional_services.push(elem.childNodes[0].innerHTML);
//       }
//     }


//     const handling_type = items[3].childNodes[0].childNodes[0].getAttribute('aria-valuenow');
//     const handling_unit_type = items[4].childNodes[0].childNodes[1].innerText;

//     const weight = items[5].childNodes[0].childNodes[0].getAttribute('aria-valuenow');

//     const freight_class = items[6].childNodes[0].childNodes[1].childNodes[0].nodeValue;
//     console.log(freight_class);

//     const length = items[7].childNodes[0].childNodes[0].getAttribute('aria-valuenow');

//     const width = items[8].childNodes[0].childNodes[0].getAttribute('aria-valuenow');

//     const height = items[9].childNodes[0].childNodes[0].getAttribute('aria-valuenow');

//     const is_stackable_checked = items[10].childNodes[0].getAttribute('class').includes('p-checkbox-checked');
//     const is_extreme_length_checked = items[11].childNodes[0].getAttribute('class').includes('p-checkbox-checked');
//     const is_hazmat_checked = items[12].childNodes[0].getAttribute('class').includes('p-checkbox-checked');


//     const item = {
//       "pickup_location": pickup_location,
//       "pickup_date": pickup_date,
//       "pickup_additional_services": pickup_additional_services,

//       "delivery_location": delivery_location,
//       "delivery_additional_services": delivery_additional_services,

//       "items": [
//         {
//           "handling_type": handling_type,
//           "handling_unit_type": handling_unit_type,
//           "weight": weight,
//           "freight_class": freight_class,
//           "length": length,
//           "width": width,
//           "height": height,
//           "is_stackable_checked": is_stackable_checked,
//           "is_extreme_length_checked": is_extreme_length_checked,
//           "is_hazmat_checked": is_hazmat_checked
//         }
//       ]
//     };


//     console.log(JSON.stringify(item, null, 2));

//     // insert data into localStorage
//     localStorage.setItem("data", JSON.stringify(item));
//   }
// };

// let temp;

const handleClick = () => {
  if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/shipmentinfo") {



    console.log('React Testing Library');

    const getPickupLocation = () => {
      const region = screen.getByRole('region', {
        name: /pickup/i
      });

      return within(region).getByRole('searchbox').value;
    }

    const getPickupDate = () => {
      const region = screen.getByRole('region', {
        name: /pickup/i
      });

      return within(region).getByRole('textbox').value;
    }

    const getPickupAdditionalServices = () => {
      return null;
    }


    const getDeliveryLocation = () => {
      const region = screen.getByRole('region', {
        name: /delivery/i
      });

      return within(region).getByRole('searchbox').value;
    }

    const delivery_additional_services = () => {
      return null;
    }

    const getHandlingUnit = () => {
      return screen.getByText(/handling unit/i).parentElement.querySelector('input').value;
    }

    const getHandlingUnitType = () => {
      return screen.getByText(/pallets/i).innerText;
    }

    const getWeight = () => {
      return screen.getByText(/total weight \(lbs\)/i).parentElement.querySelector('input').value;
    }

    const getFreightClass = () => {
      const label = screen.getByText(/Freight Class$/, {
        exact: true,
      });

      return label.parentElement.childNodes[1].childNodes[0].childNodes[1].innerText;
    }


    const getLength = () => {
      return screen.getByText(/length \(in\)/i).parentElement.querySelector('input').value;
    }

    const getWidth = () => {
      return screen.getByText(/width \(in\)/i).parentElement.querySelector('input').value;
    }

    const getHeight = () => {
      return screen.getByText(/height \(in\)/i).parentElement.querySelector('input').value;
    }

    const getIsStackableChecked = () => {
      return screen.getByText(/stackable/i).parentElement.childNodes[0].getAttribute('class').includes('p-checkbox-checked');
    }

    const getIsExtremeLengthChecked = () => {
      return screen.getByText(/extreme length/i).parentElement.childNodes[0].getAttribute('class').includes('p-checkbox-checked');
    }

    const getIsHazmatChecked = () => {
      return screen.getByText(/hazmat/i).parentElement.childNodes[0].getAttribute('class').includes('p-checkbox-checked');
    }

    const data = {
      "pickup_location": getPickupLocation(),
      "pickup_date": getPickupDate(),
      "pickup_additional_services": getPickupAdditionalServices(),

      "delivery_location": getDeliveryLocation(),
      "delivery_additional_services": delivery_additional_services(),

      "items": [
        {
          "handling_type": getHandlingUnit(),
          "handling_unit_type": getHandlingUnitType(),
          "weight": getWeight(),
          "freight_class": getFreightClass(),
          "length": getLength(),
          "width": getWidth(),
          "height": getHeight(),
          "is_stackable_checked": getIsStackableChecked(),
          "is_extreme_length_checked": getIsExtremeLengthChecked(),
          "is_hazmat_checked": getIsHazmatChecked()
        }
      ]
    };

    console.log(JSON.stringify(data, null, 2));

    // save the data to localStorage
    localStorage.setItem('data', JSON.stringify(data));
  } else if (window.location.href === "https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/rates") {
    console.log(localStorage.getItem('data'));
  }
};

const CustomButton = () => {
  return (
    <button onClick={handleClick} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent none">This is a button</button>
  );
}

export default CustomButton