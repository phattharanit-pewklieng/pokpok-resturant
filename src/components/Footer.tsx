import { footerSocials } from "../Data"


const Footer = () => {
  return (
    <div className="section">
      <div className="grid lg:grid-col-3 sm:grid-cols-2 gap-10 mb-8"></div>
      <div>
        <div className="text-xl font-semibold mb-3"> FoodZone</div>
          <p className="text-[1rem] mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima iure neque. Quidem ipsa sed, ad impedit natus labore illo quisquam facere non quam aut, quos mollitia eligendi, odit earum?
          </p>
       <div className="flex items-center gap-4">
        <span className="">Follow Us</span>
          <div className="h-[2px] w-12 bg-back"></div>
          {footerSocials.map((footerSocial, index)=>{
            return(
              <div key={index}>
                <a href="#">{footerSocial}</a>
              </div>
            )
          })}
       </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="font-semibold text-[1.1rem] mb-4">Main Menu</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer