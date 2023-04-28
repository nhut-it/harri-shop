import React from "react";

const Privacy = () => {
  return (
    <div className="privacy">
      <section className=" bg-contact pt-[100px] pb-[87px]">
        <div className="sm:container mx-auto px-[10px] text-center">
          <h1 className="text-[70px] leading-[1] text-title font-space font-bold mb-[25px] tracking-tighter">
            Privacy Policy
          </h1>
          <p className="max-w-[600px] font-inter text-center text-content mx-auto">
            Your privacy is important to us. It is Harry’s policy to respect
            your privacy regarding any information we may collect from you
            across our website, https:// Harry.com, and other sites we own and
            operate.
          </p>
        </div>
      </section>
      <section className="lg:max-w-[936px] mx-auto px-[10px] lg:px-0 shadow-2xl">
        <div className="px-[10px] py-[30px] md:p-[30px] lg:p-[70px]">
          <div className="">
            <span className="font-space text-title mb-[12px] font-medium inline-block">
              Effective date: May 25, 2023
            </span>
            <div className="font-inter text-content">
              <p className="mb-[11px]">
                Harry knows that you care about how your personal information is
                used and shared, and Harry takes your privacy seriously. Please
                read the following to learn more about Harry Privacy Policy
                (“Privacy Policy”). This Privacy Policy also tells you about
                your rights and choices with respect to your Personal
                Information, and how you can reach us to update your contact
                information or get answers to questions you may have about our
                privacy practices.
              </p>
              <p className="mb-[11px]">
                By using or accessing the Services in any manner, you
                acknowledge that you accept the practices and policies outlined
                in this Privacy Policy, and you hereby consent that Harry will
                collect, use, and share your information in the following ways.
                Remember that your use of Services is at all times subject to
                the Terms as set forth at https://harry.com/legal/terms, which
                incorporate this Privacy Policy. Any terms Harry uses in this
                Privacy Policy without defining them have the definitions given
                to them in the Terms.
              </p>
            </div>
          </div>
          <div className="">
            <h3 className="text-[34px] font-space font-bold mb-[17px] tracking-tighter">
              Information Collection
            </h3>
            <div className="text-content font-inter">
              <p className="mb-[25px]">
                You can visit and enjoy our Website without disclosing any
                Personal Information about yourself. However, for the Service to
                work properly we will need you to share with us certain Personal
                Information.
              </p>
              <p className="mb-[25px]">
                For the purposes of this Privacy Policy, “Personal Information”
                means information that identifies, relates to, describes, is
                reasonably capable of being associated with, or could be
                reasonably linked, directly or indirectly, with a particular
                consumer, device or household. It does not include de-identified
                or aggregate information, or public information lawfully
                available from governmental records.
              </p>
            </div>
          </div>
          <div className="mb-[35px]">
            <h3 className="text-[34px] font-bold text-title mb-[17px]">
              Use of Personal Information
            </h3>
            <ul className="font-intet text-content list-disc pl-[15px]">
              <li>To provide and maintain the Service;</li>
              <li>To detect, prevent and address technical issues;</li>
              <li>
                To register you as a user and to provide the services you
                require;
              </li>
              <li>
                To decide whether to offer you a Capchase product or service;
              </li>
              <li>To notify you about changes to our Service;</li>
              <li>To provide customer care and support;</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-[34px] font-bold text-title mb-[17px]">
              Contact us
            </h3>
            <p className="font-inter text-content mb-[14px]">
              You may contact us at any time via:
            </p>
            <p className=" mb-[15px]">
              <span>Email:</span>{" "}
              <a
                href="mailto:support@harry.com"
                className="hover:text-primary transititon duration-500 font-inter"
              >
                support@harry.com
              </a>
            </p>
            <a
              href="#"
              className="font-inter hover:text-primary transititon duration-500"
            >
              harry PTY LTD 4270, Brisbane, Australia
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
