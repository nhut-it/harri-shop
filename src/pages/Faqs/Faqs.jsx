import React, { useRef, useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import { TbHomeQuestion } from "react-icons/tb";
import { BsUiRadiosGrid } from "react-icons/bs";
import { HiOutlineMinusSm } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import faqImg from "../../assets/imgs/faq-img-2.webp";
import { Collapse } from "antd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Faqs.css";
const { Panel } = Collapse;
const Faqs = () => {
  const location = useLocation();
  const refTabs = useRef();
  const [activeTab, setActiveTab] = useState("");

  const handelClickTabs = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <section className="pt-[110px] pb-[50px] text-center ">
        <h1 className="text-[50px] font-space font-bold tracking-tighter">
          Frequently Asked Questions
        </h1>
        <div className="text-center flex justify-center">
          <Breadcrumb url={location.pathname} />
        </div>
      </section>
      <section>
        <div className="sm:container mx-auto px-[10px]">
          <img src={faqImg} alt="" className="" />
        </div>
      </section>

      <section className="faq-tabs pt-[100px]">
        <div className="sm:container mx-auto px-[10px]">
          <Tabs>
            <TabList className="flex font-inter border-b-[1px] mb-[50px]">
              <Tab className="tablist-faq py-[14px] px-[30px] hover:bg-[#f7f7f7] cursor-pointer terasnsition duration-500">
                <FaRegQuestionCircle className="inline mb-1 mr-1" />
                General Questions
              </Tab>
              <Tab className="tablist-faq py-[14px] px-[30px] hover:bg-[#f7f7f7] cursor-pointer terasnsition duration-500">
                <BsUiRadiosGrid className="inline mb-1 mr-1" />
                Community
              </Tab>
              <Tab className="tablist-faq py-[14px] px-[30px] hover:bg-[#f7f7f7] cursor-pointer terasnsition duration-500">
                <TbHomeQuestion className="inline mb-1 mr-1" />
                Support
              </Tab>
            </TabList>

            <TabPanel className="">
              <div className="block md:flex justify-start mb-[95px] md:flex justify-start mb-[95px]">
                <div className=" basis-[284px] w-full mb-[24px] md:mb-0">
                  <h2 className="text-[30px] font-space font-bold whitespace-normal tracking-tighter leading-[1]">
                    Orders & Shipping
                  </h2>
                </div>
                <div className=" w-full">
                  <Collapse
                    defaultActiveKey={["1"]}
                    accordion
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <HiOutlineMinusSm />
                      ) : (
                        <AiOutlinePlus className="text-primary" />
                      )
                    }
                    expandIconPosition="end"
                    bordered={false}
                  >
                    <Panel
                      header="Global search engine optimization"
                      key="1"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header=" Complete Social Media Integration"
                      key="2"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header="Branding Strategy for startups"
                      key="3"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header="How long do I get support & updates?"
                      key="3"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                  </Collapse>
                </div>
              </div>
              <div className="block md:flex justify-start mb-[95px] md:flex justify-start mb-[95px]">
                <div className=" basis-[284px] w-full mb-[24px] md:mb-0">
                  <h2 className="text-[30px] font-space font-bold whitespace-normal tracking-tighter leading-[1]">
                    Returns & Exchanges
                  </h2>
                </div>
                <div className=" w-full">
                  <Collapse
                    defaultActiveKey={["1"]}
                    accordion
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <HiOutlineMinusSm />
                      ) : (
                        <AiOutlinePlus className="text-primary" />
                      )
                    }
                    expandIconPosition="end"
                    bordered={false}
                  >
                    <Panel
                      header="How do I know my package has shipped?"
                      key="1"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header="Why are certain products unavailable to ship to Internationally?"
                      key="2"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header="Why is my tracking number not updating?"
                      key="3"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                  </Collapse>
                </div>
              </div>
              <div className="block md:flex justify-start mb-[95px] md:flex justify-start mb-[95px]">
                <div className=" basis-[284px] w-full mb-[24px] md:mb-0">
                  <h2 className="text-[30px] font-space font-bold whitespace-normal tracking-tighter leading-[1]">
                    Discounts
                  </h2>
                </div>
                <div className=" w-full">
                  <Collapse
                    defaultActiveKey={["1"]}
                    accordion
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <HiOutlineMinusSm />
                      ) : (
                        <AiOutlinePlus className="text-primary" />
                      )
                    }
                    expandIconPosition="end"
                    bordered={false}
                  >
                    <Panel
                      header="How do I know my package has shipped?"
                      key="1"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header="Why are certain products unavailable to ship to Internationally?"
                      key="2"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header="Why is my tracking number not updating?"
                      key="3"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="block md:flex justify-start mb-[95px] ">
                <div className=" basis-[284px] w-full mb-[24px] md:mb-0">
                  <h2 className="text-[30px] font-space font-bold whitespace-normal tracking-tighter leading-[1]">
                    Orders & Shipping
                  </h2>
                </div>
                <div className=" w-full">
                  <Collapse
                    defaultActiveKey={["1"]}
                    accordion
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <HiOutlineMinusSm />
                      ) : (
                        <AiOutlinePlus className="text-primary" />
                      )
                    }
                    expandIconPosition="end"
                    bordered={false}
                  >
                    <Panel
                      header="Global search engine optimization"
                      key="1"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header=" Complete Social Media Integration"
                      key="2"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header="Branding Strategy for startups"
                      key="3"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header="How long do I get support & updates?"
                      key="4"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="block md:flex justify-start mb-[95px] ">
                <div className=" basis-[284px] w-full mb-[24px] md:mb-0">
                  <h2 className="text-[30px] font-space font-bold whitespace-normal tracking-tighter leading-[1]">
                    Orders & Shipping
                  </h2>
                </div>
                <div className=" w-full">
                  <Collapse
                    defaultActiveKey={["1"]}
                    accordion
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <HiOutlineMinusSm />
                      ) : (
                        <AiOutlinePlus className="text-primary" />
                      )
                    }
                    expandIconPosition="end"
                    bordered={false}
                  >
                    <Panel
                      header="Global search engine optimization"
                      key="1"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header=" Complete Social Media Integration"
                      key="2"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header="Branding Strategy for startups"
                      key="3"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                    <Panel
                      header="How long do I get support & updates?"
                      key="4"
                      // showArrow={false}
                    >
                      <p>
                        A startup or start-up is started by individual founders
                        or entrepreneurs to search for a repeatable and scalable
                        business model. A startup or start-up is started by
                        individual founders
                      </p>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
