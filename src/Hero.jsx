

function Hero() {
    return (
        <div className="flex justify-center flex-col items-center h-screen w-full">
            <div className="text-white text-[50px] custom-slide-left ml-[-180px]"> Presentasi <i style={{ fontWeight: 100 }}>Praktek</i></div>
            <div className="text-white text-[50px] font-thin mr-[-240px] "><i>Kerja Langsung</i></div>
            <div className="text-white mt-5  border h-13 w-35 rounded-[15px] text-[20px] flex items-center justify-center"><button className="cursor-pointer">Explore</button></div>
        </div>
    );
}

export default Hero;