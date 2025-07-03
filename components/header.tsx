"use client"

import { useState, useEffect } from "react"
// Tao đã bỏ "Bell" khỏi dòng import này
import { Menu, X, Download, Search } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div
            className="font-baloo text-2xl md:text-3xl font-bold text-mam-orange cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center"
            onClick={() => scrollToSection("hero")}
          >
            <Image
              src="/images/logo-mm-final-2.png"
              alt="Măm Map Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 shadow-lg"
            />
            Măm Map
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="font-comfortaa text-gray-700 hover:text-mam-orange transition-colors duration-300 font-medium"
            >
              Cách hoạt động
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="font-comfortaa text-gray-700 hover:text-mam-orange transition-colors duration-300 font-medium"
            >
              Tính năng
            </button>
            <button
              onClick={() => scrollToSection("screenshots")}
              className="font-comfortaa text-gray-700 hover:text-mam-orange transition-colors duration-300 font-medium"
            >
              Ảnh chụp màn hình
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="font-comfortaa text-gray-700 hover:text-mam-orange transition-colors duration-300 font-medium"
            >
              Đánh giá
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="font-comfortaa text-gray-700 hover:text-mam-orange transition-colors duration-300 font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-comfortaa text-gray-700 hover:text-mam-orange transition-colors duration-300 font-medium"
            >
              Liên hệ
            </button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-mam-orange transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            {/* Cái button chứa icon Bell ở đây đã bị tao xóa đi rồi nhé.
            */}
            <button
              onClick={() => scrollToSection("download")}
              className="bg-mam-orange hover:bg-orange-600 text-white px-4 py-2 rounded-full font-comfortaa font-medium text-sm transition-all duration-300 hover:scale-105 flex items-center"
            >
              <Download className="w-4 h-4 mr-1" />
              Tải App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-mam-orange transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-dvh opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {[
              { label: "Cách hoạt động", id: "how-it-works" },
              { label: "Tính năng", id: "features" },
              { label: "Ảnh chụp màn hình", id: "screenshots" },
              { label: "Đánh giá", id: "testimonials" },
              { label: "FAQ", id: "faq" },
              { label: "Liên hệ", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 font-comfortaa text-gray-700 hover:text-mam-orange hover:bg-orange-50 transition-all duration-300 rounded-lg mx-2"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2 border-t border-gray-200">
              <button
                onClick={() => scrollToSection("download")}
                className="w-full bg-mam-orange hover:bg-orange-600 text-white px-4 py-3 rounded-full font-comfortaa font-medium transition-all duration-300 flex items-center justify-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Tải App
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}