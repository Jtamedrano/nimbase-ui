import heroImg from "../../resources/imgs/blue-aura-background.jpg"

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="flex flex-col relative">
      <div className="h-[90vh] relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,1))",
          }}
        >
          <img
            src={heroImg}
            alt="Blue Aura Background"
            className="object-cover w-full h-full opacity-50"
          />
        </div>

        {/* Hero Image */}
        <section
          className="h-[90vh]"
          style={{
            backdropFilter: "blur(50px)",
          }}
        >
          <div className="bg-transparent sticky top-0 left-0 w-full z-10">
            <nav className="flex justify-between items-center max-h-16 w-full max-w-7xl mx-auto p-4 text-white">
              <div className="text-2xl font-bold cursor-pointer tracking-wide">
                NimBase
              </div>
            </nav>
          </div>
          <div
            className="absolute inset-0 top-[56px]"
            style={{ height: "calc(100vh - 56px)" }}
          >
            <div className="h-full flex flex-col items-center justify-center gap-4 max-w-7xl mx-auto px-4 py-8 text-white">
              <h1 className="text-3xl font-bold">
                The Business Cloud for the Modern Entrepreneur
              </h1>
              {/* TagLine */}
              <p className="text-lg">
                A comprehensive suite of tools to help you manage your business
              </p>
              {/* CTA */}
              <div className="flex gap-4">
                <button
                  className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300 ease-in-out"
                  style={{
                    boxShadow: "inset 0 3px 3px -1px rgba(255,255,255,0.50)",
                  }}
                >
                  Join the Waitlist
                </button>
                <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-950 transition-colors duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center gap-8 shadow rounded-lg bg-white">
          <h2 className="text-2xl font-bold">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Managing Cashflow */}

            <FeatureSectionItem
              title="Managing Cashflow"
              description="With our invoicing and expense tracking modules, overcome cash flow constraints effortlessly."
            />
            {/* Boosting Digital Presence */}

            <FeatureSectionItem
              title="Amplify Your Online Marketing"
              description="Leverage integrated marketing solutions, from social media management to email marketing, to connect with your audience."
            />
            {/* Streamlining Recruitment */}

            <FeatureSectionItem
              title="Hire and Retain the Best"
              description="Attract and keep qualified employees with our comprehensive applicant tracking and employee engagement tools."
            />
          </div>
        </div>
      </section>
      <section className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center gap-8 bg-slate-800 rounded-lg shadow text-white">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <div className="flex gap-8">
            {/* Beta Access */}
            <div className="flex flex-col gap-4 p-4 rounded-lg bg-slate-700">
              <h3 className="text-lg font-bold">Beta Access</h3>
              <p className="text-gray-300">Get early access to NimBase</p>
              {/* Temporary Free */}
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold">Free</span>
                <span className="text-gray-300">Limited Time Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface FeatureSectionItemProps {
  title: string
  description: string
}

const FeatureSectionItem: React.FC<FeatureSectionItemProps> = ({
  title,
  description,
}) => (
  <div className="flex flex-col items-center text-center gap-4">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-500 max-w-[70%]">{description}</p>
  </div>
)

export default HomePage
