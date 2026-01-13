"use client"

import { useState, useEffect } from "react";
import Container from "../shared/Container";

export default function CustomPackage() {
    // Hardcoded test package
    const basePackage = {
        planName: "Standard Sports Highlight",
        description: "Standard package for clubs and competitive players",
        basePrice: 0, // base price
    };

    const optionCost = 2; // $2 per option

    // Options
    const clipsOptions = [10, 20, 30, 40];
    const revisionOptions = [1, 2, 3, 5];
    const daysOptions = [1, 2, 3, 5];

    // State
    const [selectedClips, setSelectedClips] = useState<number[]>([]);
    const [selectedRevisions, setSelectedRevisions] = useState<number[]>([]);
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    const [totalPrice, setTotalPrice] = useState(basePackage.basePrice);

    // Update total price whenever options change
    useEffect(() => {
        const clipsCost = selectedClips.length * optionCost;
        const revisionsCost = selectedRevisions.length * optionCost;
        const daysCost = selectedDays.length * optionCost;

        setTotalPrice(basePackage.basePrice + clipsCost + revisionsCost + daysCost);
    }, [selectedClips, selectedRevisions, selectedDays]);

    // Toggle selection helper
    const toggleSelection = (value: number, arr: number[], setArr: (v: number[]) => void) => {
        if (arr.includes(value)) setArr(arr.filter((v) => v !== value));
        else setArr([...arr, value]);
    };

    return (
        <Container className="mx-auto pt-12">
        <div className="min-h-screen  p-6 xl:px-32">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-4">{basePackage.planName}</h1>
                    <p className="text-gray-700 mb-6">{basePackage.description}</p>
                </div>

                {/* Total Price */}
                <div className="text-2xl font-bold mb-6">Total Price: ${totalPrice}</div>
            </div>

            {/* Clips */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Number of Clips ($2 each)</h2>
                <div className="flex flex-wrap gap-4">
                    {clipsOptions.map((clip) => (
                        <label
                            key={clip}
                            className={`flex items-center gap-2 px-4 py-2 border rounded cursor-pointer text-black ${selectedClips.includes(clip) ? "bg-blue-100 border-blue-500" : "bg-white"
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={selectedClips.includes(clip)}
                                onChange={() => toggleSelection(clip, selectedClips, setSelectedClips)}
                            />
                            {clip} Clips
                        </label>
                    ))}
                </div>
            </div>

            {/* Revisions */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Revisions ($2 each)</h2>
                <div className="flex flex-wrap gap-4">
                    {revisionOptions.map((rev) => (
                        <label
                            key={rev}
                            className={`flex items-center gap-2 px-4 py-2 border rounded cursor-pointer text-black ${selectedRevisions.includes(rev) ? "bg-green-100 border-green-500" : "bg-white"
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={selectedRevisions.includes(rev)}
                                onChange={() => toggleSelection(rev, selectedRevisions, setSelectedRevisions)}
                            />
                            {rev} Revision{rev > 1 ? "s" : ""}
                        </label>
                    ))}
                </div>
            </div>

            {/* Delivery Days */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Delivery Days ($2 each)</h2>
                <div className="flex flex-wrap gap-4">
                    {daysOptions.map((day) => (
                        <label
                            key={day}
                            className={`flex items-center gap-2 px-4 py-2 border rounded cursor-pointer text-black ${selectedDays.includes(day) ? "bg-yellow-100 border-yellow-500" : "bg-white"
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={selectedDays.includes(day)}
                                onChange={() => toggleSelection(day, selectedDays, setSelectedDays)}
                            />
                            {day} Day{day > 1 ? "s" : ""}
                        </label>
                    ))}
                </div>
            </div>



            {/* Action Button */}
            <button
                onClick={() =>
                    alert(
                        `Package: ${basePackage.planName}\nTotal Price: $${totalPrice}\nClips: ${selectedClips.join(
                            ", "
                        )}\nRevisions: ${selectedRevisions.join(", ")}\nDays: ${selectedDays.join(", ")}`
                    )
                }
                className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
                Select Package
            </button>
        </div>
        </Container>
    );
}
