"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false); // Search bar toggle
  const [query, setQuery] = useState(""); // Search input
  const [results, setResults] = useState<{ title: string; path: string }[]>([]); // Search results

  // Mock data with dynamic paths
  const mockData = [
    { title: "Land Deep Male Two Living Give Fruit", path: "/Components/LDMTLGF" },
    { title: "Every Them Herb Air Deep Had Stars Man", path: "/Components/ETHADHSM" },
    { title: "Creeping Moved God Fourth Darkness Hath", path: "/Components/CMGFDH" },
    { title: "Beginning Two Don't A Very Likeness", path: "/Components/BTDAVL" },
    { title: "Team Work is The Best Work Solution Of the Fast Work to Grow a Better World", path: "/Components/TWITBWS" },
    { title: "Set May Bearing and Female Fourth Heaven Lesser", path: "/Components/SMBAFFHL" },
    { title: "Whales Lesser isn't Abundantly Form Spirit Grass Moving", path: "/Components/WLIAFSGM" },
    { title: "Hath Wherein Light Had Over Years Man", path: "/Components/HWLHOYM" },
    { title: "Be Female Heaven Night Seas Stars Spirit Brought Moveth", path: "/Components/BFHNSSSBM" },
    { title: "Grass Man Lights Face Said and Blessed Every", path: "/Components/GMLFSABE" },
    { title: "Popular Travel Place in The World", path: "/Components/PTPITW" },
    { title: "Popular Food in Bangladesh", path: "/Components/PFIB" },
  ];

  // Toggle search bar
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setResults([]); // Reset results
    setQuery(""); // Reset query
  };

  // Filter search results based on input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filteredResults = mockData.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <header className="text-gray-400 bg-slate-800 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-2xl flex text-orange-500 font-bold">
            SHMUQ<p className="text-yellow-500">BLOG</p>
          </span>
        </Link>

        {/* Search Icon */}
        <div
          className="ml-auto cursor-pointer text-white text-2xl"
          onClick={toggleSearch}
        >
          🔍
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="w-full mt-2 relative">
            <input
              type="text"
              className="w-full p-2 rounded-md text-black"
              placeholder="Search this blog"
              value={query}
              onChange={handleSearch}
            />
            <div
              className="absolute top-0 right-0 p-2 cursor-pointer text-black"
              onClick={toggleSearch}
            >
              ❌
            </div>
          </div>
        )}

        {/* Search Results */}
        {results.length > 0 && (
          <div className="absolute bg-white text-black p-4 mt-2 w-full">
            <ul>
              {results.map((result, index) => (
                <li key={index} className="p-2 border-b">
                  <Link href={result.path}>
                    <p className="hover:text-blue-500">{result.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
