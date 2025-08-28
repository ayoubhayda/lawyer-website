"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, ArrowLeft } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

export default function BlogPage() {
  const { locale } = useLocale()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight

  const categories = [
    { id: "all", name: locale === "ar" ? "الكل" : "All" },
    { id: "family", name: locale === "ar" ? "قانون الأسرة" : "Family Law" },
    { id: "business", name: locale === "ar" ? "القانون التجاري" : "Business Law" },
    { id: "real-estate", name: locale === "ar" ? "العقارات" : "Real Estate" },
    { id: "criminal", name: locale === "ar" ? "الجنائي" : "Criminal" },
  ]

  const blogPosts = [
    {
      id: 1,
      title: locale === "ar" ? "دليل شامل لقانون الأسرة في السعودية" : "Complete Guide to Family Law in Saudi Arabia",
      titleAr: "دليل شامل لقانون الأسرة في السعودية",
      titleEn: "Complete Guide to Family Law in Saudi Arabia",
      excerpt:
        locale === "ar"
          ? "تعرف على أهم القوانين والإجراءات المتعلقة بقضايا الأسرة والزواج والطلاق في المملكة العربية السعودية"
          : "Learn about the most important laws and procedures related to family, marriage, and divorce cases in Saudi Arabia",
      excerptAr: "تعرف على أهم القوانين والإجراءات المتعلقة بقضايا الأسرة والزواج والطلاق في المملكة العربية السعودية",
      excerptEn:
        "Learn about the most important laws and procedures related to family, marriage, and divorce cases in Saudi Arabia",
      category: "family",
      date: "2024-01-15",
      readTime: locale === "ar" ? "5 دقائق" : "5 min read",
      author: locale === "ar" ? "المحامي أحمد الراشد" : "Lawyer Ahmed Al-Rashid",
      image: "/placeholder.svg?height=300&width=400&text=Family+Law+Guide",
    },
    {
      id: 2,
      title: locale === "ar" ? "كيفية تأسيس شركة في السعودية" : "How to Establish a Company in Saudi Arabia",
      titleAr: "كيفية تأسيس شركة في السعودية",
      titleEn: "How to Establish a Company in Saudi Arabia",
      excerpt:
        locale === "ar"
          ? "خطوات مفصلة لتأسيس شركة في المملكة العربية السعودية مع شرح المتطلبات القانونية والإجراءات اللازمة"
          : "Detailed steps to establish a company in Saudi Arabia with explanation of legal requirements and necessary procedures",
      excerptAr: "خطوات مفصلة لتأسيس شركة في المملكة العربية السعودية مع شرح المتطلبات القانونية والإجراءات اللازمة",
      excerptEn:
        "Detailed steps to establish a company in Saudi Arabia with explanation of legal requirements and necessary procedures",
      category: "business",
      date: "2024-01-10",
      readTime: locale === "ar" ? "7 دقائق" : "7 min read",
      author: locale === "ar" ? "المحامي أحمد الراشد" : "Lawyer Ahmed Al-Rashid",
      image: "/placeholder.svg?height=300&width=400&text=Business+Formation",
    },
    {
      id: 3,
      title: locale === "ar" ? "حقوق المستأجر والمؤجر في القانون السعودي" : "Tenant and Landlord Rights in Saudi Law",
      titleAr: "حقوق المستأجر والمؤجر في القانون السعودي",
      titleEn: "Tenant and Landlord Rights in Saudi Law",
      excerpt:
        locale === "ar"
          ? "دليل شامل لحقوق وواجبات المستأجر والمؤجر وفقاً لنظام الإيجار الجديد في المملكة العربية السعودية"
          : "Comprehensive guide to tenant and landlord rights and obligations according to the new rental system in Saudi Arabia",
      excerptAr: "دليل شامل لحقوق وواجبات المستأجر والمؤجر وفقاً لنظام الإيجار الجديد في المملكة العربية السعودية",
      excerptEn:
        "Comprehensive guide to tenant and landlord rights and obligations according to the new rental system in Saudi Arabia",
      category: "real-estate",
      date: "2024-01-05",
      readTime: locale === "ar" ? "6 دقائق" : "6 min read",
      author: locale === "ar" ? "المحامي أحمد الراشد" : "Lawyer Ahmed Al-Rashid",
      image: "/placeholder.svg?height=300&width=400&text=Real+Estate+Rights",
    },
    {
      id: 4,
      title:
        locale === "ar" ? "الدفاع في القضايا الجنائية: حقوقك وواجباتك" : "Criminal Defense: Your Rights and Duties",
      titleAr: "الدفاع في القضايا الجنائية: حقوقك وواجباتك",
      titleEn: "Criminal Defense: Your Rights and Duties",
      excerpt:
        locale === "ar"
          ? "تعرف على حقوقك في القضايا الجنائية وكيفية التعامل مع الاتهامات الجنائية والإجراءات القانونية"
          : "Learn about your rights in criminal cases and how to deal with criminal charges and legal procedures",
      excerptAr: "تعرف على حقوقك في القضايا الجنائية وكيفية التعامل مع الاتهامات الجنائية والإجراءات القانونية",
      excerptEn: "Learn about your rights in criminal cases and how to deal with criminal charges and legal procedures",
      category: "criminal",
      date: "2023-12-28",
      readTime: locale === "ar" ? "8 دقائق" : "8 min read",
      author: locale === "ar" ? "المحامي أحمد الراشد" : "Lawyer Ahmed Al-Rashid",
      image: "/placeholder.svg?height=300&width=400&text=Criminal+Defense",
    },
    {
      id: 5,
      title:
        locale === "ar"
          ? "العقود التجارية: أساسيات الصياغة والمراجعة"
          : "Commercial Contracts: Drafting and Review Basics",
      titleAr: "العقود التجارية: أساسيات الصياغة والمراجعة",
      titleEn: "Commercial Contracts: Drafting and Review Basics",
      excerpt:
        locale === "ar"
          ? "نصائح مهمة لصياغة ومراجعة العقود التجارية لضمان حماية مصالحك التجارية والقانونية"
          : "Important tips for drafting and reviewing commercial contracts to ensure protection of your business and legal interests",
      excerptAr: "نصائح مهمة لصياغة ومراجعة العقود التجارية لضمان حماية مصالحك التجارية والقانونية",
      excerptEn:
        "Important tips for drafting and reviewing commercial contracts to ensure protection of your business and legal interests",
      category: "business",
      date: "2023-12-20",
      readTime: locale === "ar" ? "6 دقائق" : "6 min read",
      author: locale === "ar" ? "المحامي أحمد الراشد" : "Lawyer Ahmed Al-Rashid",
      image: "/placeholder.svg?height=300&width=400&text=Contract+Drafting",
    },
    {
      id: 6,
      title:
        locale === "ar" ? "التطورات الجديدة في قانون الاستثمار السعودي" : "New Developments in Saudi Investment Law",
      titleAr: "التطورات الجديدة في قانون الاستثمار السعودي",
      titleEn: "New Developments in Saudi Investment Law",
      excerpt:
        locale === "ar"
          ? "آخر التحديثات والتطورات في قانون الاستثمار السعودي وتأثيرها على المستثمرين المحليين والأجانب"
          : "Latest updates and developments in Saudi investment law and their impact on local and foreign investors",
      excerptAr: "آخر التحديثات والتطورات في قانون الاستثمار السعودي وتأثيرها على المستثمرين المحليين والأجانب",
      excerptEn:
        "Latest updates and developments in Saudi investment law and their impact on local and foreign investors",
      category: "business",
      date: "2023-12-15",
      readTime: locale === "ar" ? "9 دقائق" : "9 min read",
      author: locale === "ar" ? "المحامي أحمد الراشد" : "Lawyer Ahmed Al-Rashid",
      image: "/placeholder.svg?height=300&width=400&text=Investment+Law",
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (locale === "ar") {
      return date.toLocaleDateString("ar-SA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-balance">
                {locale === "ar" ? "المدونة القانونية" : "Legal Blog"}
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-pretty">
                {locale === "ar"
                  ? "مقالات ونصائح قانونية متخصصة لمساعدتكم في فهم القوانين والإجراءات القانونية"
                  : "Specialized legal articles and tips to help you understand laws and legal procedures"}
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder={locale === "ar" ? "ابحث في المقالات..." : "Search articles..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rtl:pl-4 rtl:pr-10"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={
                      selectedCategory === category.id
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground"
                    }
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {locale === "ar" ? "لم يتم العثور على مقالات" : "No articles found"}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-accent/50 overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                        <Badge className="bg-accent text-accent-foreground">
                          {categories.find((cat) => cat.id === post.category)?.name}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </CardDescription>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-accent hover:text-accent-foreground hover:bg-accent group/btn"
                        >
                          {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                          <ArrowIcon className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform duration-200" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  {locale === "ar" ? "تحميل المزيد" : "Load More"}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-balance">
              {locale === "ar" ? "اشترك في النشرة القانونية" : "Subscribe to Legal Newsletter"}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
              {locale === "ar"
                ? "احصل على آخر المقالات والنصائح القانونية مباشرة في بريدك الإلكتروني"
                : "Get the latest legal articles and tips delivered directly to your email"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder={locale === "ar" ? "بريدك الإلكتروني" : "Your email address"}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                {locale === "ar" ? "اشترك" : "Subscribe"}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
