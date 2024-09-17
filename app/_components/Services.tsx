import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Services() {
  return (
    <div className='p-6' id='Services'>
        <h2 className='text-center mb-20 font-bold text-4xl'>OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16 p-6">
        <Link href="#" className="relative block border shadow-lg p-4 rounded-xl transition-all ease-in-out hover:scale-105 hover:border-orange-500 ">
            <div className="relative h-[350px] sm:h-[250px]">
            <Image
            src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726500716/self-storage2_rjykvh.avif"
            layout="fill"
            objectFit="cover"
            alt="self-storage"
            className="rounded-2xl"
          />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-36 ">SELF STORAGE</h3>
            
            </div>
            <div className=''>
            <p className="text-xs mt-10  ">
                Our self-storage solutions offer flexible and secure storage options for businesses and individuals alike. With state-of-the-art facilities and 24/7 surveillance, you can trust us to safely store your goods and assets. Whether you need short-term or long-term storage, our logistics company provides tailored solutions to meet your needs efficiently and reliably.
            </p>

            
            </div>
        </Link>

        <Link target="_blank" href="#" className="relative block border shadow-lg p-4 rounded-xl transition-all ease-in-out hover:scale-105 hover:border-orange-500 ">
            <div className="relative h-[350px] sm:h-[250px]">
            <Image
                src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726500720/Warehousing_gzdqde.jpg"
                layout="fill"
                objectFit="cover"
                alt="warehousing"
                className="rounded-2xl"
            />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-36">WAREHOUSING</h3>
            
            </div>
            <div className=''>
            <p className="text-xs mt-10">
                Our warehousing services provide a secure and organized solution for managing inventory. Equipped with advanced tracking systems and climate control, we ensure your goods are stored safely and efficiently. From bulk storage to order fulfillment, our warehousing facilities are designed to support your logistical needs with precision and reliability.
            </p>

            
            </div>
        </Link>
        
        <Link target="_blank" href="#" className="relative block border shadow-lg p-4 rounded-xl transition-all ease-in-out hover:scale-105 hover:border-orange-500 ">
            <div className="relative h-[350px] sm:h-[250px]">
            <Image
                src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726500705/coldchain_efp2nt.webp"
                layout="fill"
                objectFit="cover"
                alt="cold chain"
                className="rounded-2xl"
          />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-36">COLD CHAIN SOLUTION</h3>
            
            </div>
            <div className=''>
            <p className="text-xs mt-10">
                Our cold-chain solutions ensure the safe and efficient handling of temperature-sensitive products. With state-of-the-art refrigeration and monitoring systems, we maintain optimal conditions throughout the supply chain, preserving the quality and integrity of perishable goods from storage to delivery.
            </p>

            
            </div>
        </Link>
        
        <Link target="_blank" href="#" className="relative block border shadow-lg p-4 rounded-xl transition-all ease-in-out hover:scale-105 hover:border-orange-500 ">
            <div className="relative h-[350px] sm:h-[250px]">
            <Image
                src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726500704/air2_pbv7iu.webp"
                layout="fill"
                objectFit="cover"
                alt="air logistics"
                className="rounded-2xl"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-36">AIR LOGISTICS</h3>
            
            </div>
            <div className=''>
            <p className="text-xs mt-10">
                Air logistics offer rapid and efficient transportation of goods across long distances. With advanced air cargo services, we ensure timely delivery and secure handling of shipments, providing a reliable solution for high-value or time-sensitive cargo. Our global network and streamlined processes make air logistics an essential component of modern supply chains.
            </p>

            
            </div>
        </Link>

        <Link target="_blank" href="#" className="relative block border shadow-lg p-4 rounded-xl transition-all ease-in-out hover:scale-105 hover:border-orange-500 ">
            <div className="relative h-[350px] sm:h-[250px]">
            <Image
                src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726500714/marine_rtdvfi.jpg"
                layout="fill"
                objectFit="cover"
                alt="marine logistics"
                className="rounded-2xl"
          />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-36">MARINE LOGISTICS</h3>
            
            </div>
            <div className=''>
            <p className="text-xs mt-10">
                Marine logistics play a crucial role in global trade by facilitating the transport of goods across oceans and seas. Leveraging a vast network of shipping routes and ports, marine logistics offer cost-effective and scalable solutions for moving large volumes of cargo. Our expertise ensures efficient handling, timely deliveries, and compliance with international regulations, making marine logistics a cornerstone of international supply chains.
            </p>

            
            </div>
        </Link>
        

        <Link target="_blank" href="#" className="relative block border shadow-lg p-4 rounded-xl transition-all ease-in-out hover:scale-105 hover:border-orange-500 ">
            <div className="relative h-[350px] sm:h-[250px]">
            <Image
                src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726500704/3PL_l9mc0r.webp"
                layout="fill"
                objectFit="cover"
                alt="3pl logistics"
                className="rounded-2xl"
          />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-36">3PL LOGISTICS</h3>
            
            </div>
            <div className=''>
            <p className="text-xs mt-10">
                Third-Party Logistics (3PL) offers comprehensive supply chain solutions by managing warehousing, distribution, and transportation functions on behalf of businesses. By outsourcing these logistics operations, companies can focus on their core competencies while benefiting from 3PLs expertise, technology, and scalable resources. This approach enhances efficiency, reduces costs, and ensures seamless integration across the supply chain.
            </p>

            
            </div>
        </Link>
        

        <Link target="_blank" href="#" className="relative block border shadow-lg p-4 rounded-xl transition-all ease-in-out hover:scale-105 hover:border-orange-500 ">
            <div className="relative h-[350px] sm:h-[250px]">
            <Image
                src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726500708/inventory_rfipnn.jpg"
                layout="fill"
                objectFit="cover"
                alt="inventory management"
                className="rounded-2xl"
             />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-40">INVENTORY MANAGEMENT</h3>
                </div>
                <div>
                {/* eslint-disable react/no-unescaped-entities */}
                <p className="text-xs mt-10">
                    Inventory management involves the efficient control and oversight of a companys stock levels to ensure that the right products are available at the right time. Effective inventory management helps businesses minimize holding costs, prevent stockouts, and streamline the supply chain. By utilizing advanced systems and strategies, companies can optimize their inventory levels, improve cash flow, and enhance customer satisfaction.
                </p>
                {/* eslint-enable react/no-unescaped-entities */}
            </div>

        </Link>
        

        <Link target="_blank" href="#" className=" relative block border shadow-lg p-4 rounded-xl transition-all ease-in-out hover:scale-105 hover:border-orange-500 ">
            <div className="relative h-[350px] sm:h-[250px]">
            <Image
                src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726500705/distribution_iab3or.webp"
                layout="fill"
                objectFit="cover"
                alt="distribution center"
                className="rounded-2xl"
            />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-40">DISTRIBUTION CENTER</h3>
            
            </div>
            <div className=''>
            <p className="text-xs mt-10">
                Our distribution center is a key facility in the supply chain that focuses on storing goods, managing inventory, and efficiently distributing products to retailers or customers. It serves as a strategic hub for consolidating shipments, optimizing logistics processes, and ensuring timely delivery. By centralizing operations and leveraging advanced technology, distribution centers help businesses reduce shipping costs, improve order accuracy, and enhance overall supply chain efficiency.
            </p>

            
            </div>
        </Link>
        

        <Link target="_blank" href="#" className="relative block border shadow-lg p-4 rounded-xl transition-all ease-in-out hover:scale-105 hover:border-orange-500 ">
            <div className="relative h-[350px] sm:h-[250px]">
            <Image
                src="/images/finance.jpg"
                layout="fill"
                objectFit="cover"
                alt="self-storage"
                className="rounded-2xl"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-44">INVENTORY FINANCE</h3>
            
            </div>
            <div >
            <p className="text-xs mt-10">
                Inventory finance refers to the financial management and funding strategies used to support the procurement, storage, and management of inventory. By leveraging various financing options, such as inventory loans or lines of credit, businesses can maintain optimal stock levels, improve cash flow, and ensure smooth operations. Effective inventory finance helps companies manage their working capital more efficiently, reduce financial strain, and support growth by aligning inventory needs with available resources.
            </p>

            
            </div>
        </Link>
        
        
        
        </div>
    </div>
  );
}

export default Services;
