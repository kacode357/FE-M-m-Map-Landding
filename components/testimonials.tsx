"use client"

import { useState, useEffect, useRef } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      name: "Nguyễn Minh Anh",
      role: "Food Blogger",
      location: "Hà Nội",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "Măm Map thực sự là ứng dụng tuyệt vời! AI chatbot rất thông minh, luôn gợi ý đúng món ăn theo sở thích của tôi. Giao diện tiếng Việt rất thân thiện và dễ sử dụng.",
      highlight: "AI chatbot rất thông minh",
    },
    {
      name: "Trần Văn Hùng",
      role: "Chủ quán Phở Hùng",
      location: "TP.HCM",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "Từ khi sử dụng Măm Map, quán tôi có thêm nhiều khách hàng mới. Tính năng AI tạo ảnh món ăn giúp quán tôi có những hình ảnh đẹp mắt để quảng bá.",
      highlight: "Có thêm nhiều khách hàng mới",
    },
    {
      name: "Lê Thị Mai",
      role: "Nhân viên văn phòng",
      location: "Đà Nẵng",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "Mình rất thích tính năng tìm quán ăn gần đây của Măm Map. Chỉ cần hỏi AI là có ngay danh sách quán ngon, tiết kiệm thời gian tìm kiếm rất nhiều.",
      highlight: "Tiết kiệm thời gian tìm kiếm",
    },
    {
      name: "Phạm Đức Thành",
      role: "Chủ quán Bún Bò Huế",
      location: "Huế",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "Măm Map giúp tôi quản lý đánh giá khách hàng một cách chuyên nghiệp. Tôi có thể phản hồi nhanh chóng và cải thiện chất lượng phục vụ.",
      highlight: "Quản lý đánh giá chuyên nghiệp",
    },
    {
      name: "Hoàng Thị Lan",
      role: "Sinh viên",
      location: "Hà Nội",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "Là sinh viên với ngân sách hạn chế, Măm Map giúp mình tìm được những quán ăn ngon mà giá cả phải chăng. AI hiểu rõ nhu cầu của mình.",
      highlight: "Tìm quán ăn giá phải chăng",
    },
    {
      name: "Vũ Minh Tuấn",
      role: "Chủ chuỗi quán Cơm Tấm",
      location: "TP.HCM",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "Với 5 chi nhánh, Măm Map giúp tôi quản lý tất cả một cách hiệu quả. Doanh thu tăng 30% sau 3 tháng sử dụng ứng dụng.",
      highlight: "Doanh thu tăng 30%",
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
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-mam-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-mam-yellow/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Người dùng nói gì về <span className="text-mam-orange">Măm Map</span>?
          </h2>
          <p className="font-comfortaa text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hàng nghìn người dùng và chủ quán đã tin tưởng và sử dụng Măm Map mỗi ngày
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            { number: "4.8", suffix: "/5", label: "Đánh giá trung bình", icon: "⭐" },
            { number: "10K+", suffix: "", label: "Người dùng hài lòng", icon: "👥" },
            { number: "50K+", suffix: "", label: "Đánh giá tích cực", icon: "💬" },
            { number: "99%", suffix: "", label: "Tỷ lệ hài lòng", icon: "❤️" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="font-baloo text-3xl md:text-4xl font-bold text-mam-orange mb-1">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="font-comfortaa text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-16 h-16 text-mam-orange" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-comfortaa text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Highlight */}
                <div className="text-center mb-8">
                  <span className="inline-block bg-mam-orange/10 text-mam-orange px-4 py-2 rounded-full font-comfortaa font-medium text-sm">
                    {testimonials[currentTestimonial].highlight}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                  />
                  <div className="text-center">
                    <div className="font-comfortaa font-bold text-gray-800 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="font-comfortaa text-mam-orange font-medium">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="font-comfortaa text-gray-500 text-sm">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Grid */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-comfortaa font-bold text-gray-800">{testimonial.name}</div>
                  <div className="font-comfortaa text-mam-orange text-sm">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="font-comfortaa text-gray-600 text-sm leading-relaxed">
                "{testimonial.content.slice(0, 120)}..."
              </p>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index ? "bg-mam-orange scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
