import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from "recharts";

const Statistics = () => {
  const addData = useLoaderData();
  const [totalAdd, setTotalAdd] = useState(0);
  const [donation, setDonation] = useState(0);

  useEffect(() => {
    let sum = 0;
    addData.forEach((add) => {
      sum += add.price;
    });
    setTotalAdd(sum);
  }, [addData]);

  useEffect(() => {
    let donateSum = 0;
    const donationItem = JSON.parse(localStorage.getItem("donation"));

    if (donationItem) {
      donationItem.forEach((donate) => {
        donateSum += parseInt(donate.price);
      });
      setDonation(donateSum);
    }
  }, []);

  const totalPercentage = ((totalAdd / (totalAdd + donation)) * 100).toFixed(2);
  const donationPercentage = (
    (donation / (totalAdd + donation)) * 100
  ).toFixed(2);

  const data = [
    { name: "Total Adds", value: parseFloat(totalPercentage) },
    { name: "Donation", value: parseFloat(donationPercentage) },
  ];

  // Custom colors for the pie chart slices
  const colors = ["#FF444A", "#00C49F"];

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend 
            verticalAlign="bottom"
            height={36}
            iconSize={18}
            formatter={(value) => `${value}%`}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
