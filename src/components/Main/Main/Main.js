
import { Cards } from "../Cards/Cards";
import { HidenInfo } from "../HidenInfo/HidenInfo";
import { SubmitForm } from "../SubmitForm/SubmitForm";


export const Main = () => {

   return(
       <main className="py-6">
           <HidenInfo />
           <div className="main__content">               
              <Cards />
              <SubmitForm />
           </div>
       </main>
   )
}
