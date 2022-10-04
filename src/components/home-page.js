const HomePage = () => {



    const doctorDetails = [
        { img: "images/star.png", value: "4.7", title: "Rating" },
        { img: "images/bag.png", value: "4+", title: "Year Exp" },
        { img: "images/human.png", value: "5k+", title: "Patients" },
        { img: "images/awards.png", value: "15+", title: "Awards" }
    ]
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center ">
                    <div >
                        <h1 className="text-[32px]">Hello,  <span className="text-[#62BBCB]">Charles Miller</span></h1>
                    </div>
                    <div >
                        <img className=" rounded-lg" src="images/Pexels Photo by Edgar Serrano.png" alt="image" />
                    </div>
                </div>

                <div className="flex items-center w-full border-[#62BBCB] border-2 h-[44px] p-[6px] rounded-lg" >
                    <input className="w-full bg-transparent" placeholder="Search Doctor" />
                    <button className="bg-[yellow] h-[34px] w-[58px] rounded-xl"><img className="px-4" src="images/Layer 2.png" /></button>
                </div>

                <div className="bg-[#62BBCB] rounded-lg  flex justify-between items-center">
                    <div className="p-[10px] flex flex-col gap-4 ml-2">
                        <div className="flex flex-col ">
                            <div><h1 className="text-[white] font-bold text-bold text-[20px]">Explore Top Doctors</h1></div>
                            <div><p className="text-[12px] ">with rating and reviews</p></div>
                        </div>
                        <div>
                            <button className="bg-[yellow] rounded-lg h-[34px] w-[58px]"><img className="px-4" src="images/Arrow.png" /></button>
                        </div>
                    </div>
                    <div>
                        <img className="mt-[-25px] h-[180px]" src="images/banner-img.png" />
                    </div>
                </div>
                <div>
                    <h1>Doctor of the month</h1>
                    <div className="border-2 border-[#62BBCB] w-full p-4 rounded-lg flex flex-col gap-4 ">
                        <div className="flex gap-2 items-center">
                            <div>
                                <img src="images/doctor.png" alt="doctor" />
                            </div>
                            <div>
                                <div><h1 className="text-[#62BBCB] font-bold text-[20px]">Dr. John Gibbs</h1></div>
                                <div>BDS, MDS</div>
                                <div>Dental Surgeon</div>
                            </div>
                        </div>
                        <div className="flex justify-around">
                        {doctorDetails.map((item, id) => {
                            return (
                                <>
                                    <div className="flex flex-col items-center gap-[2px]" key={id}>
                                        <div className="h-[40px] w-[40px] bg-[#62BBCB] rounded-lg flex justify-center items-center">
                                            <img src={item.img}/>
                                        </div>
                                        <h3 className="text-[#62BBCB]">{item.value}</h3>
                                        <p className="text-[12px]">{item.title}</p>
                                    </div>
                                </>
                            )
                        })}
</div>

                    </div>
                </div>
            </div>
        </>
ho    )
}
export default HomePage;