import {ContactContent} from "../../components/ContactContent";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

function Contact() {
  return (
    <div className="w-full h-screen md:p-10">
        <div className="w-full h-full shadow-[0_0px_0_rgb(0,0,0)] hover:shadow-[9px_9px_0px_rgb(0,0,0)] ease-out transition-all flex flex-col z-1 md:border-2 md:border-black md:rounded-2xl bg-[#0E1129]">
        <Header/>
          <div className="flex flex-row w-full h-full">
            <SideBar/>
            <ContactContent />
          </div>
        </div>
      
    </div>
  )
}

export default Contact;