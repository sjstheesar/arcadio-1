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

                <div>
                    <section class="wrapper">
                        <h1 className="sentence">Welcome to Arcadio
                            <div class="slidingVertical">
                                <span>Best</span>
                                <span>Enjoyable</span>
                                <span>Earnable</span>
                                <span>NFT</span>
                                <span>GameFi</span>
                            </div>
                        </h1>
                        <h1 class="sentence">Network
                        </h1>
                    </section>
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