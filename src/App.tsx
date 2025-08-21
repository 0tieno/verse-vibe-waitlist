import { useState, useEffect, useMemo } from "react";
import { Clock, Users, Calendar, Star } from "lucide-react";

const App = () => {
  // const [email, setEmail] = useState("");
  // const [state, handleSubmit] = useForm("mrblyylp");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [submittedEmails, setSubmittedEmails] = useState<string[]>([]);

  // Load previously submitted emails from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem("versevibe-submitted-emails");
    if (stored) {
      try {
        setSubmittedEmails(JSON.parse(stored));
      } catch (error) {
        console.error("Error parsing stored emails:", error);
      }
    }
  }, []);

  const launchDate = useMemo(() => {
    // Set launch date to Monday, August 11th, 2025
    const date = new Date("2025-08-22T00:00:00");
    return date;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Custom submit handler to check for duplicates (commented out)
  // const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   // Check if email was already submitted
  //   if (submittedEmails.includes(email.toLowerCase())) {
  //     e.preventDefault();
  //     alert("This email has already been added to the waitlist!");
  //     return;
  //   }
  //
  //   // Store email immediately (optimistic update)
  //   const emailToStore = email.toLowerCase();
  //   const updatedEmails = [...submittedEmails, emailToStore];
  //   setSubmittedEmails(updatedEmails);
  //   localStorage.setItem(
  //     "versevibe-submitted-emails",
  //     JSON.stringify(updatedEmails)
  //   );
  //
  //   // Proceed with Formspree submission
  //   handleSubmit(e);
  // };

  // Check if current email is already submitted (commented out)
  // const isEmailAlreadySubmitted =
  //   email && submittedEmails.includes(email.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">VerseVibe</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            {launchDate.getTime() - currentTime.getTime() > 0 ? (
              <>
                Launching in{" "}
                {Math.floor(
                  (launchDate.getTime() - currentTime.getTime()) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                days
              </>
            ) : (
              <>
                Launched on{" "}
                {launchDate.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </>
            )}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {launchDate.getTime() - currentTime.getTime() > 0 ? (
              <>
                Something
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Amazing
                </span>
                is Coming
              </>
            ) : (
              <>
                Something
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Amazing
                </span>
                was Launched
              </>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            VerseVibe is the ultimate Adventist social media app built for you
            with a mission to connect hearts to heaven.
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-12">
            {launchDate.getTime() - currentTime.getTime() > 0 ? (
              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {Math.floor(
                      (launchDate.getTime() - currentTime.getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}
                  </div>
                  <div className="text-gray-600 font-medium">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                    {Math.floor(
                      ((launchDate.getTime() - currentTime.getTime()) %
                        (1000 * 60 * 60 * 24)) /
                        (1000 * 60 * 60)
                    )}
                  </div>
                  <div className="text-gray-600 font-medium">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                    {Math.floor(
                      ((launchDate.getTime() - currentTime.getTime()) %
                        (1000 * 60 * 60)) /
                        (1000 * 60)
                    )}
                  </div>
                  <div className="text-gray-600 font-medium">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                    {Math.floor(
                      ((launchDate.getTime() - currentTime.getTime()) %
                        (1000 * 60)) /
                        1000
                    )}
                  </div>
                  <div className="text-gray-600 font-medium">Seconds</div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                  Launched, visit{" "}
                  <a
                    href="https://versevibe.co.ke"
                    className="text-blue-600 underline"
                  >
                    versevibe.co.ke
                  </a>{" "}
                  now
                </div>
                <div className="text-lg text-gray-700 mt-2">
                  Date launched:{" "}
                  {launchDate.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Connect
            </h3>
            <p className="text-gray-600">
              Join a vibrant community of Adventist youth sharing faith and
              fellowship.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Grow</h3>
            <p className="text-gray-600">
              Daily verses, prayer requests, and spiritual growth tools to
              strengthen your faith.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Share</h3>
            <p className="text-gray-600">
              Share your journey, testimonies, and encourage others in their
              walk with Christ.
            </p>
          </div>
        </div>

        {/* Waitlist Form (commented out) */}
        {/**
        <div className="max-w-md mx-auto">
          {!state.succeeded ? (
            <form
              onSubmit={handleFormSubmit}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Get Early Access
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Be among the first to experience the new VerseVibe when we
                launch!
              </p>

              <div className="flex gap-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent ${
                    isEmailAlreadySubmitted
                      ? "border-red-300 focus:ring-red-500 bg-red-50"
                      : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                />
                <button
                  type="submit"
                  disabled={
                    state.submitting || Boolean(isEmailAlreadySubmitted)
                  }
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Joining..." : "Join"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {isEmailAlreadySubmitted && (
                <div className="text-red-500 text-sm mt-2">
                  This email has already been added to the waitlist!
                </div>
              )}

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-2"
              />
            </form>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                You're on the list!
              </h2>
              <p className="text-gray-600 mb-6">
                We'll notify you as soon as the new VerseVibe is ready. Get
                ready for an amazing experience!
              </p>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Waitlist confirmed
              </div>
            </div>
          )}
        </div>
        */}

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-500">
            Questions? Contact us at{" "}
            <a
              href="mailto:admin@versevibe.co.ke"
              className="text-blue-600 hover:underline"
            >
              admin@versevibe.co.ke
            </a>
          </p>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-blue-200/30 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default App;
