import styleText from "data-text:./app.css"
import type { PlasmoGetStyle } from "plasmo"

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

// import type { PlasmoCSConfig } from "plasmo"

// export const config: PlasmoCSConfig = {
//  matches: ["https://scm.jbhunt.com/shipper/ngx/create-shipment/ltl/shipmentinfo"],
//  all_frames: true
// }

const handleClick = () => {
  const items = document.querySelectorAll("[formcontrolname]")

  const pickup_location = "TODO"
  const pickup_date = "TODO"
  const pickup_additional_services = []

  const pickup_additional_services_elems = document.querySelectorAll(
    "[multiselectcontrolname]"
  )[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0]
    .childNodes
  for (const elem of pickup_additional_services_elems) {
    if (elem.nodeName === "DIV") {
      pickup_additional_services.push(elem.childNodes[0].innerHTML)
    }
  }

  const delivery_location = "TODO"
  const delivery_additional_services = []

  const delivery_additional_services_elems = document.querySelectorAll(
    "[multiselectcontrolname]"
  )[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0]
    .childNodes
  for (const elem of delivery_additional_services_elems) {
    if (elem.nodeName === "DIV") {
      delivery_additional_services.push(elem.childNodes[0].innerHTML)
    }
  }

  const handling_type =
    items[3].childNodes[0].childNodes[0].getAttribute("aria-valuenow")
  const handling_unit_type = items[4].childNodes[0].childNodes[1].innerText

  const weight =
    items[5].childNodes[0].childNodes[0].getAttribute("aria-valuenow")

  const freight_class = items[6].childNodes[0].childNodes[1].childNodes[0]

  const length =
    items[7].childNodes[0].childNodes[0].getAttribute("aria-valuenow")

  const width =
    items[8].childNodes[0].childNodes[0].getAttribute("aria-valuenow")

  const height =
    items[9].childNodes[0].childNodes[0].getAttribute("aria-valuenow")

  const is_stackable_checked = items[10].childNodes[0]
    .getAttribute("class")
    .includes("p-checkbox-checked")
  const is_extreme_length_checked = items[11].childNodes[0]
    .getAttribute("class")
    .includes("p-checkbox-checked")
  const is_hazmat_checked = items[12].childNodes[0]
    .getAttribute("class")
    .includes("p-checkbox-checked")

  const item = {
    pickup_location: pickup_location,
    pickup_date: pickup_date,
    pickup_additional_services: pickup_additional_services,

    delivery_location: delivery_location,
    delivery_additional_services: delivery_additional_services,

    items: [
      {
        handling_type: handling_type,
        handling_unit_type: handling_unit_type,
        weight: weight,
        freight_class: freight_class,
        length: length,
        width: width,
        height: height,
        is_stackable_checked: is_stackable_checked,
        is_extreme_length_checked: is_extreme_length_checked,
        is_hazmat_checked: is_hazmat_checked
      }
    ]
  }

  // console.log('Hello, World');
  console.log(JSON.stringify(item, null, 2))

  // insert data into localStorage
  localStorage.setItem("data", JSON.stringify(item))
}

// const handleClick = () => {};

const CustomButton = () => {
  return (
    <button
      onClick={handleClick}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent none">
      This is a button
    </button>
  )
}

export default CustomButton
