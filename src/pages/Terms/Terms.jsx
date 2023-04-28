import React from "react";

const Terms = () => {
  return (
    <div className="term">
      <section className=" bg-contact pt-[100px] pb-[87px]">
        <div className="sm:container mx-auto px-[10px] text-center">
          <h1 className="text-[70px] max-w-[400px] mx-auto leading-[1] text-title font-space font-bold mb-[25px] tracking-tighter">
            Terms and Conditions
          </h1>
          <p className="max-w-[500px] font-inter text-center text-content mx-auto">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
        </div>
      </section>
      <section className="lg:max-w-[926px] mx-auto px-[10px] lg:px-0  pb-[120px]">
        <div className="px-[10px] py-[30px`] md:p-[30px] lg:p-[70px] shadow-2xl">
          <div className="">
            <span className="font-space text-title mb-[12px] font-medium inline-block">
              Last updated: September 18, 2022
            </span>
            <div className="font-inter text-content">
              <p className="mb-[11px]">
                These are the Terms and Conditions governing the use of this
                Service and the agreement that operates between You and the
                Company. These Terms and Conditions set out the rights and
                obligations of all users regarding the use of the Service.Your
                access to and use of the Service is conditioned on Your
                acceptance of and compliance with these Terms and Conditions.
                These Terms and Conditions apply to all visitors, users and
                others who access or use the Service.
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
              Definitions
            </h3>
            <div className="text-content font-inter">
              <p className="mb-[25px]">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
            </div>
          </div>
          <div className="mb-[35px]">
            <h3 className="text-[34px] font-bold text-title mb-[17px]">
              Purposes of these Terms and Conditions:
            </h3>
            <ul className="font-intet text-content list-disc pl-[15px]">
              <li>
                <span className="text-title font-bold">Affiliate</span>
                means an entity that controls, is controlled by or is under
                common control with a party, where "control" means ownership of
                50% or more of the shares, equity interest or other securities
                entitled to vote for election of directors or other managing
                authority.
              </li>
              <li>
                <span className="text-title font-bold">Country</span> refers to:
                California, United States
              </li>
              <li>
                <span className="text-title font-bold">Compan</span>y (referred
                to as either "the Company", "We", "Us" or "Our" in this
                Agreement) refers to Harry.
              </li>
              <li>
                <span className="text-title font-bold">Device</span>
                means any device that can access the Service such as a computer,
                a cellphone or a digital tablet.
              </li>
              <li>
                <span className="text-title font-bold" Service></span> refers to
                the Website.
              </li>
              <li>
                <span className="text-title font-bold">Website</span> refers to
                Harry, accessible from harry.com
              </li>
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

export default Terms;
