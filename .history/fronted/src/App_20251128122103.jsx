import './App.css'
import { Wrench, Clock, Mail } from "lucide-react";

function App() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Wrench className="w-24 h-24 text-indigo-600 animate-pulse" />
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                <Clock className="w-6 h-6 text-gray-800" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            We'll Be Back Soon!
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Our website is currently undergoing scheduled maintenance to serve
            you better.
          </p>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <p className="text-indigo-900 font-semibold mb-2">
              Expected Return Time
            </p>
            <p className="text-2xl font-bold text-indigo-600">In few time</p>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-gray-700">
              We apologize for any inconvenience. Our team is working hard to
              improve your experience.
            </p>
            <p className="text-gray-600 text-sm">
              Thank you for your patience and understanding.
            </p>
          </div>

          <div className="border-t pt-6">
            <p className="text-gray-600 mb-3 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Need urgent assistance?
            </p>
            <a
              href="mailto: indraakshidivya@gmail.com"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Contact Support
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App

