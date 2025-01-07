/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
      <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
      <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
      Our commitment to your privacy is paramount at EXAM-PREP. We understand the importance of safeguarding your personal information and ensuring its security. When you engage with our platform, whether it's registering for an account, purchasing a course, or simply browsing our website, we collect certain types of information to enhance your experience and provide you with the best possible service.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        This information includes personal details such as your name, email address, and phone number, which you provide when registering or contacting us. Additionally, we gather usage data to better understand how you interact with our platform, including your browsing behavior, IP address, and device information. Rest assured, we take the utmost care in protecting this data, employing industry-standard security measures to prevent unauthorized access, disclosure, and alteration.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Furthermore, we respect your privacy rights and adhere to all applicable laws and regulations regarding the collection, use, and retention of personal information. We do not share your information with third parties except as necessary to provide our services, and we never sell your data for marketing purposes.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        As part of our ongoing commitment to transparency and accountability, we may update our Privacy Policy from time to time to reflect changes in our practices or regulatory requirements. We encourage you to review this policy periodically for any updates. If you have any questions or concerns about our privacy practices or how we handle your data, please don't hesitate to contact us. Thank you for trusting us with your privacy.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores!
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          blanditiis architecto quasi impedit in dicta nisi, asperiores
          voluptatum eos alias facilis assumenda ex beatae, culpa dignissimos
          accusantium quod numquam dolores!
        </p>
      </ul>
      </div>
    </div>
  );
};

export default Policy;
