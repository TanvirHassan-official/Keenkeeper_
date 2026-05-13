"use client";

import { useContext } from "react";
import { TimelineContext } from "@/context/context";

import {
    PieChart,
    Pie,
    Sector,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const ActivityPieChart = () => {

    const { timelineData } = useContext(TimelineContext);

    const COLORS = ["#244D3F", "#1A8862", "#80fd80"];

    // Activity Counts
    const callCount = timelineData.filter(
        item => item.clicked === "Call"
    ).length;

    const textCount = timelineData.filter(
        item => item.clicked === "Text"
    ).length;

    const videoCount = timelineData.filter(
        item => item.clicked === "Video Call"
    ).length;

    // Chart Data
    const data = [
        { name: "Call", value: callCount },
        { name: "Text", value: textCount },
        { name: "Video Call", value: videoCount },
    ];

    // Custom Active Shape
    const renderActiveShape = (props) => {

        const RADIAN = Math.PI / 180;

        const {
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            startAngle,
            endAngle,
            fill,
            payload,
            percent,
            value,
        } = props;

        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);

        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;

        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;

        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;

        const textAnchor = cos >= 0 ? "start" : "end";

        return (
            <g>

                {/* Center Text */}
                <text
                    x={cx}
                    y={cy}
                    dy={8}
                    textAnchor="middle"
                    fill={fill}
                    className="font-bold"
                >
                    {payload.name}
                </text>

                {/* Main Sector */}
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />

                {/* Outer Glow */}
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 12}
                    fill={fill}
                />

                {/* Line */}
                <path
                    d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                    stroke={fill}
                    fill="none"
                />

                {/* Dot */}
                <circle
                    cx={ex}
                    cy={ey}
                    r={4}
                    fill={fill}
                    stroke="none"
                />

                {/* Count */}
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    textAnchor={textAnchor}
                    fill="#000"
                    className="font-semibold"
                >
                    {`${value} interactions`}
                </text>

                {/* Percentage */}
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    dy={20}
                    textAnchor={textAnchor}
                    fill="#666"
                >
                    {`${((percent || 0) * 100).toFixed(0)}%`}
                </text>

            </g>
        );
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-4xl font-bold mb-6 text-[#244D3F]">
                Friendship Analytics
            </h2>
            <h2 className="text-2xl font-bold mb-6 text-[#244D3F] pl-8">
                By Interaction Type
            </h2>

            <div className="w-full h-[450px]">

                <ResponsiveContainer>

                    <PieChart
                        margin={{
                            top: 30,
                            right: 100,
                            bottom: 30,
                            left: 100,
                        }}
                    >

                        <Pie
                            activeIndex={0}
                            activeShape={renderActiveShape}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={120}
                            dataKey="value"
                        >

                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}

                        </Pie>

                        <Tooltip />

                    </PieChart>

                </ResponsiveContainer>

            </div>


            <div className="flex flex-wrap justify-center gap-6 mt-6">

                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#244D3F]"></div>
                    <p className="font-medium text-black">Call</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#1A8862]"></div>
                    <p className="font-medium text-black">Text</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#80fd80]"></div>
                    <p className="font-medium text-black">Video Call</p>
                </div>

            </div>
        </div>
    );
};

export default ActivityPieChart;