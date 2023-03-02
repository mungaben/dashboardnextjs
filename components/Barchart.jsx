import React, { useEffect, useState } from "react";

import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barchart = () => {
    const [Chartdata, setchartData] = useState({
        datasets:[]
    });
    const [options, setoptions] = useState({})   
    useEffect(() => {
        
            setchartData(
                {
                    labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                    datasets:[
                        {   label:"Sales summary",
                            data:[18127,22201,19480,24182,17842,22427,12321,15643,13579,2904,12017,13453],
                            backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3498db","#e8c3b9","#3cba9f","#8e5ea2","#3e95cd"],
                        },
                    ]
                }
            );
            setoptions({
                Plugin: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Sales summary ytd'
                    },
                   

                },
                maintainaspectratio: false,
                responsive: true,
            })
            
      
    }, []);
  return <div>
    <div className=" w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto bg-white">
        <Bar data={Chartdata} options={options} />
    </div>
  </div>;
};

export default Barchart;
