import Image from 'next/image';

import githubIcon from "../../../assets/icons/github.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import linkedinIcon from "../../../assets/icons/linkedin.png";
import youtubeIcon from "../../../assets/icons/youtube.png";

export const Networks = () => {
  return (
    <ul>
                            <li>
                                <a href="#">
                                    <Image src={githubIcon} alt="github" width={30} height={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={facebookIcon} alt="facebook" width={30} height={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={linkedinIcon} alt="lindedin" width={30} height={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={youtubeIcon} alt="Youtube" width={30} height={30} />
                                </a>
                            </li>
                        </ul>
  )
}
