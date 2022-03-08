import pinkbar from '../images/Group13.png';
import blueright from '../images/Blue.png';
import pinkleft from '../images/Pink.png';
import joystick from '../images/Group.png';

const ArcadioMain = () => {
    return (
        <section>
            <div className="flex md:flex w-full justify-center items-center">
                <div className="md:flex-[0.5]flex-initial justify-center items-center">
                    <img src={pinkleft} alt="pinkleft" className="w-80 " />
                </div>
                <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                    <div className="flex flex-1 justify-start flex-col md:mr-10">
                        <h1 className="text-2xl sm:text-5xl text-orange text-gradient py-1">
                            Best
                        </h1>
                        <h1 className="text-2xl sm:text-5xl text-blue-600 text-gradient py-1">
                            Realistic
                        </h1>
                        <h1 className="text-2xl sm:text-5xl text-lightgreen text-gradient py-1">
                            Enjoyable
                        </h1>
                        <h1 className="text-2xl sm:text-5xl text-white text-gradient py-1">
                            Earnable
                        </h1>
                        <h1 className="text-2xl sm:text-5xl text-white text-gradient py-1">
                            NFT
                        </h1>
                        <h1 className="text-2xl sm:text-5xl text-white text-gradient py-1">
                            Gamefi
                        </h1>
                        <h1 className="text-2xl sm:text-5xl text-white text-gradient py-1">
                            Network
                        </h1>
                        <p className="text-center mt-5 text-white font-light md:w-9/14 w-11/14 text-base">
                            Welcome to<br />    Arcadio<br />       Network
                        </p>

                    </div>

                </div>
                <div className="md:flex-[0.5]flex-initial justify-center items-center">
                    <img src={blueright} alt="blueside" className="w-80 " />
                </div>
            </div>
            <div>
                <div className="flex md:flex w-full justify-center items-center">
                    <div className="md:flex-[0.5]flex-initial justify-center items-center">
                        <img src={pinkbar} alt="pinkleft" className="w-180 " />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center">
                    <div className="md:flex-[0.5]flex-initial justify-center items-center">
                        <img src={joystick} alt="pinkleft" className="w-80 " />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center">
                    <h1 className="text-2xl sm:text-4xl text-orange text-gradient py-1">
                        NFT Game is not over
                    </h1>
                </div>
            </div>

        </section>
    );
}

export default ArcadioMain;