import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
    matches: ["https://scm.jbhunt.com/shipper/ngx/dashboard"],
    all_frames: true,
    run_at: "document_end"
}


document.addEventListener('click', function(event) {
    console.log(event.target.innerText);
})

export default {};