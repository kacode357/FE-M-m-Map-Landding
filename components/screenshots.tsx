"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Smartphone } from "lucide-react"

export default function Screenshots() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Tao đã cập nhật mảng này với ảnh của mày
  const screenshots = [
    {
      title: "Trang chủ thông minh",
      description: "Giao diện thân thiện với gợi ý món ăn cá nhân hóa",
      image: "/images/home.jpg", // Đã thay
      category: "user",
    },
    {
      title: "Chatbot AI",
      description: "Trò chuyện với AI để tìm món ăn phù hợp",
      image: "/images/aichat.jpg", // Đã thay
      category: "user",
    },
    {
      title: "Bản đồ quán ăn",
      description: "Tìm kiếm quán ăn gần bạn với bản đồ tương tác",
      image: "/images/map.jpg", // Đã thay
      category: "user",
    },
    {
      title: "Dashboard chủ quán",
      description: "Quản lý quán ăn và theo dõi doanh thu",
      image: "/images/dashboardadmin.jpg", // Đã thay
      category: "merchant",
    },
    {
      title: "AI tạo ảnh món ăn",
      description: "Tạo ảnh món ăn chuyên nghiệp bằng AI",
      image: "/images/aiimage.jpg", // Đã thay
      category: "merchant",
    },
   
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section ref={sectionRef} id="screenshots" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Ảnh chụp <span className="text-mam-orange">màn hình</span>
          </h2>
          <p className="font-comfortaa text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá giao diện đẹp mắt và tính năng mạnh mẽ của Măm Map
          </p>
        </div>

        {/* Screenshots Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Main Screenshot */}
            <div
              className={`relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="relative mx-auto max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[2.5rem] p-1">
                    <div className="bg-white rounded-[2rem] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                      {/* Screenshot */}
                      <img
                        src={screenshots[currentSlide].image || "/placeholder.svg"}
                        alt={screenshots[currentSlide].title}
                        className="w-full h-[600px] object-cover"
                      />

                      {/* Overlay Info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                            screenshots[currentSlide].category === "user"
                              ? "bg-blue-500 text-white"
                              : "bg-mam-orange text-white"
                          }`}
                        >
                          {screenshots[currentSlide].category === "user" ? "Người dùng" : "Chủ quán"}
                        </div>
                        <h3 className="font-comfortaa font-bold text-white text-lg mb-1">
                          {screenshots[currentSlide].title}
                        </h3>
                        <p className="font-comfortaa text-white/80 text-sm">{screenshots[currentSlide].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-mam-orange scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            {
              icon: Smartphone,
              title: "Responsive Design",
              description: "Tối ưu hoàn hảo cho mọi thiết bị di động",
            },
            {
              icon: Play,
              title: "Smooth Animation",
              description: "Hiệu ứng mượt mà, trải nghiệm người dùng tuyệt vời",
            },
            {
              icon: "🎨",
              title: "UI/UX Đẹp mắt",
              description: "Thiết kế hiện đại, thân thiện với người Việt",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              <div className="text-center">
                {typeof feature.icon === "string" ? (
                  <div className="text-4xl mb-4">{feature.icon}</div>
                ) : (
                  <div className="w-12 h-12 bg-mam-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                )}
                <h3 className="font-comfortaa font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="font-comfortaa text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}