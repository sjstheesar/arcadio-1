import pinkbar from '../images/Group13.png';
import joystick from '../images/Group.png';

const ArcadioServices = () => {
    return (
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
    );
}

export default ArcadioServices;