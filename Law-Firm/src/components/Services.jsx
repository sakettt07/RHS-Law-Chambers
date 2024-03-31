import { FaBlog } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsBuildingsFill } from "react-icons/bs";
import { IoNewspaper } from "react-icons/io5";
import { GiPassport } from "react-icons/gi";
import { PiHandHeartBold } from "react-icons/pi";
import { VscLaw } from "react-icons/vsc";
import { MdAppRegistration } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { RiFilePaperLine } from "react-icons/ri";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { BsFillEnvelopePaperFill } from "react-icons/bs";
import { FaStamp } from "react-icons/fa6";
import { FaBuildingUser } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Services() {
  const posts = [
    {
      id: 1,
      title: "Legal Services",
      description:
        "PITNDPS, DRT, Revenue, POCSO, NDPS, Bail, NCDRC, NCLT, NCLAT, DRI, Customs legal clearance, MVA, PCPNDT, DDA, DUSIIB, MSME, SLPs, Writs, Review, Revision, PILs, Caveat, Appeal, Matrimonial, Criminal and Civil matters",
      imageUrl: (
        <VscLaw className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 1.2,
      title: "Property Disputes",
      description:
        "Sale/Purchase, Partition, Mortgage, Conveyance and Property Valuation.",
      imageUrl: (
        <FaBlog className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 2,
      title: "Deed Writing",
      description:
        "Sale Deed, Rent Agreement, Partnership Deed, Relinquishment Deed, Gift Deed, Power of Attorney.",
      imageUrl: (
        <FaBuildingUser className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 3,
      title: "Notarization and Stamp Duty.",
      description:
        " Sometimes we skip our meals , yoga classes or forget drinking water. Here our notifier will send you emails so that you get prior notifications about the them.",
      imageUrl: (
        <FaStamp className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 4,
      title: "Survivor Certificate, Legal Hier Certificate",
      description:
        " We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form.",
      imageUrl: (
        <BsFillEnvelopePaperFill className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 5,
      title: "All kinds of Agreements including Hire/Fire Agreements, NDA, MOU’s etc.",
      description:
        " We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form.",
      imageUrl: (
        <RiFilePaperLine className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 6,
      title: "Due Diligence related to property and investments including vetting and verification of documents.",
      description:
        " We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form.",
      imageUrl: (
        <BiSolidBuildingHouse className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 7,
      title: "Mediation and Negotiations.",
      description:
        " We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form.",
      imageUrl: (
        <MdGroups2 className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 8,
      title: "Court Marriage and Marriage Registration.",
      description:
        " We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form.",
      imageUrl: (
        <MdAppRegistration className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 9,
      title: "Gift Deed, Will Drafting and Will Probate.",
      description:
        " We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form.",
      imageUrl: (
        <PiHandHeartBold className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 10,
      title: "Police Verification and Passport Services.",
      description:
        " We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form.",
      imageUrl: (
        <GiPassport className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 11,
      title: "Custom Clearance.",
      description:
        " We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form.",
      imageUrl: (
        <IoNewspaper className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 12,
      title: "De-sealing of Properties.",
      description:
        " We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form.",
      imageUrl: (
        <BsBuildingsFill className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
    {
      id: 13,
      title: "Loan Settlement and Recovery.",
      description:
        " We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form.",
      imageUrl: (
        <GiTakeMyMoney className="h-10 w-10 rounded-full bg-gray-200 p-2 mr-4 overflow-visible " />
      ),
    },
  ];

  return (
    <>
    <Navbar />
      <div className="bg-white py-20 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Helpful Services
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              We are stand out as an integrated platform to provide healthcare
              solutions for deprived and helpless women around the world Our
              platform can be used in several cases and can impact lives of
              several young girls.
            </p>
          </div>
          <div className="mx-auto mt-7 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-2 sm:mt-16 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="group relative">
                  <h3 className=" text-lg font-semibold leading-6 text-gray-900 flex items-center ">
                    <span className="absolute inset-0" />
                    {post.imageUrl}
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4"></div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;



