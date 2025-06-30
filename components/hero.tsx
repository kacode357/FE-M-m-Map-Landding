"use client"

import { useState, useEffect } from "react"
import { Download, Play, ArrowRight, Star, Users, Zap } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const highlights = [
    { icon: Users, text: "10,000+ người dùng tin tưởng", color: "text-blue-600" },
    { icon: Star, text: "4.8/5 sao đánh giá", color: "text-yellow-600" },
    { icon: Zap, text: "AI thông minh nhất Việt Nam", color: "text-green-600" },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleDownloadUser = () => {
    console.log("Tải APK cho người dùng")
    alert("Đang chuẩn bị link tải APK cho Người dùng...")
  }

  const handleDownloadMerchant = () => {
    console.log("Tải APK cho chủ quán")
    alert("Đang chuẩn bị link tải APK cho Chủ quán...")
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-mam-orange/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-mam-yellow/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 pt-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Highlight Banner */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 mb-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon
                return (
                  <div
                    key={index}
                    className={`flex items-center transition-all duration-500 ${
                      currentSlide === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 mr-2 ${highlight.color}`} />
                    <span className="font-comfortaa font-medium text-gray-700">{highlight.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Logo Animation */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="font-baloo text-6xl md:text-8xl lg:text-9xl font-bold text-mam-orange mb-4 animate-bounce-slow drop-shadow-lg">
              Măm Map
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-mam-orange to-mam-yellow mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Main Title Animation */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="font-baloo text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Cộng đồng review quán ăn
              <br />
              <span className="text-mam-orange bg-gradient-to-r from-mam-orange to-orange-600 bg-clip-text text-transparent">
                chuẩn vị Việt
              </span>
            </h2>
          </div>

          {/* Description Animation */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="font-comfortaa text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold text-mam-orange">Măm Map</span> là ứng dụng thông minh giúp bạn khám phá và
              đánh giá các quán ăn ngon nhất Việt Nam.
              <br className="hidden md:block" />
              Với công nghệ AI tiên tiến, chúng tôi mang đến trải nghiệm tìm kiếm món ăn hoàn toàn mới.
            </p>
          </div>

          {/* Feature Highlights */}
          <div
            className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-comfortaa font-bold text-gray-800 mb-1">AI Chatbot</h3>
                <p className="font-comfortaa text-sm text-gray-600">Tư vấn món ăn thông minh</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">📸</div>
                <h3 className="font-comfortaa font-bold text-gray-800 mb-1">AI Tạo ảnh</h3>
                <p className="font-comfortaa text-sm text-gray-600">Ảnh món ăn chuyên nghiệp</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">🇻🇳</div>
                <h3 className="font-comfortaa font-bold text-gray-800 mb-1">100% Việt Nam</h3>
                <p className="font-comfortaa text-sm text-gray-600">Giao diện tiếng Việt</p>
              </div>
            </div>
          </div>

          {/* Buttons Animation */}
          <div
            className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={handleDownloadUser}
                className="group bg-gradient-to-r from-mam-orange to-orange-600 hover:from-orange-600 hover:to-mam-orange text-white font-comfortaa font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Download className="mr-2 h-5 w-5 animate-bounce" />
                Tải cho Người dùng
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={handleDownloadMerchant}
                className="group bg-gradient-to-r from-mam-yellow to-yellow-500 hover:from-yellow-500 hover:to-mam-yellow text-gray-800 font-comfortaa font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Download className="mr-2 h-5 w-5 animate-bounce" />
                Tải cho Chủ quán
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Demo Video Button */}
            <button className="group flex items-center justify-center mx-auto text-gray-600 hover:text-mam-orange transition-colors duration-300 mb-8">
              <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mr-3 group-hover:scale-110">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <div className="text-left">
                <div className="font-comfortaa font-bold">Xem video demo</div>
                <div className="font-comfortaa text-sm text-gray-500">2 phút giới thiệu</div>
              </div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-700">10K+</div>
                <div className="font-comfortaa text-sm text-gray-600">Người dùng</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-700">5K+</div>
                <div className="font-comfortaa text-sm text-gray-600">Quán ăn</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-700">50K+</div>
                <div className="font-comfortaa text-sm text-gray-600">Đánh giá</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-700">4.8★</div>
                <div className="font-comfortaa text-sm text-gray-600">Xếp hạng</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
