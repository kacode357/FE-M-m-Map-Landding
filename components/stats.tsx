"use client"

import { useState, useEffect, useRef } from "react"
import { TrendingUp, Users, Star, Zap } from "lucide-react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ users: 0, reviews: 0, restaurants: 0, rating: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          startCounters()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const startCounters = () => {
    const targets = { users: 10000, reviews: 50000, restaurants: 5000, rating: 4.8 }
    const duration = 2000
    const steps = 60

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({
          ...prev,
          [key]: key === "rating" ? Number(current.toFixed(1)) : Math.floor(current),
        }))
      }, duration / steps)
    })
  }

  const stats = [
    {
      icon: Users,
      value: counters.users.toLocaleString(),
      suffix: "+",
      label: "Người dùng",
      color: "text-mam-orange",
      bgColor: "bg-mam-orange/10",
      delay: "delay-100",
    },
    {
      icon: Star,
      value: counters.reviews.toLocaleString(),
      suffix: "+",
      label: "Đánh giá",
      color: "text-mam-yellow",
      bgColor: "bg-mam-yellow/10",
      delay: "delay-200",
    },
    {
      icon: TrendingUp,
      value: counters.restaurants.toLocaleString(),
      suffix: "+",
      label: "Quán ăn",
      color: "text-green-600",
      bgColor: "bg-green-100",
      delay: "delay-300",
    },
    {
      icon: Zap,
      value: counters.rating,
      suffix: "/5",
      label: "Đánh giá",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      delay: "delay-400",
    },
  ]

  return (
    <section ref={sectionRef} id="stats" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-orange-50/30 to-yellow-50/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mam-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mam-yellow/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Tại sao chọn <span className="text-mam-orange">măm map</span>?
          </h2>
          <p className="font-comfortaa text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Những con số ấn tượng chứng minh sự tin tưởng của cộng đồng
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className={`text-center p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20 ${isVisible ? `animate-fade-in-up ${stat.delay}` : "opacity-0"}`}
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <IconComponent className={`h-8 w-8 md:h-10 md:w-10 ${stat.color}`} />
                </div>
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} mb-2 font-baloo`}>
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="font-comfortaa text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-mam-orange/10 to-orange-100/50 rounded-xl">
              <h4 className="font-baloo text-xl font-bold text-mam-orange mb-2">100% Tiếng Việt</h4>
              <p className="font-comfortaa text-gray-600 text-sm">Giao diện hoàn toàn bằng tiếng Việt</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-mam-yellow/10 to-yellow-100/50 rounded-xl">
              <h4 className="font-baloo text-xl font-bold text-mam-yellow mb-2">AI Thông minh</h4>
              <p className="font-comfortaa text-gray-600 text-sm">Công nghệ AI tiên tiến nhất</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-100/50 to-green-200/30 rounded-xl">
              <h4 className="font-baloo text-xl font-bold text-green-600 mb-2">Miễn phí</h4>
              <p className="font-comfortaa text-gray-600 text-sm">Sử dụng hoàn toàn miễn phí</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
