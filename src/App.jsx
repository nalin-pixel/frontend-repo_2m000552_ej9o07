import { useMemo } from 'react'

const PRIMARY = '#0077b6'

function App() {
  const whatsappNumber = '7972425727'
  const phoneDisplay = '+91 79724 25727'
  const email = 'amar.gaykwad@gmail.com'
  const owner = 'Amard Gaikwad'
  const businessName = 'DAG Water Supply Service'
  const location = 'Nayara Depot, Dahegaon Miskin'
  const slogan = 'Pure Water, Reliable Supply – Anytime, Anywhere.'

  const whatsappLink = useMemo(() => {
    const text = encodeURIComponent(
      `Hello ${businessName}, I would like to request a water supply.\n\nName: \nRequired Quantity: 5,000L / 10,000L / 24,000L\nAddress: \nPreferred Date & Time: \nNotes:`
    )
    return `https://wa.me/91${whatsappNumber}?text=${text}`
  }, [])

  const googleMapEmbed = useMemo(() => {
    const q = encodeURIComponent(`${businessName}, ${location}`)
    return `https://www.google.com/maps?q=${q}&output=embed`
  }, [])

  const services = [
    {
      title: '5,000 Liters',
      desc: 'Perfect for residential tanks and small community needs.',
      badge: 'Fresh Water',
    },
    {
      title: '10,000 Liters',
      desc: 'Ideal for industrial sites and community water points.',
      badge: 'Industrial & Community',
    },
    {
      title: '24,000 Liters',
      desc: 'Best for large-scale agricultural or construction requirements.',
      badge: 'Large-Scale',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <img
            src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1600&auto=format&fit=crop"
            alt="Clean water background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-800 border border-blue-100">
              <span className="w-2 h-2 rounded-full" style={{ background: PRIMARY }} />
              {location}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              {businessName}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
              {slogan}
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] hover:brightness-95 text-white font-semibold px-5 py-3 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.52 3.48A11.77 11.77 0 0 0 12.05 0C5.72 0 .57 5.15.57 11.48c0 2.02.53 4 1.53 5.76L0 24l6.93-2.04a11.48 11.48 0 0 0 5.12 1.25h.01c6.34 0 11.49-5.15 11.49-11.48 0-3.06-1.19-5.93-3.53-8.25ZM12.06 21.6h-.01c-1.62 0-3.21-.43-4.6-1.25l-.33-.2-4.11 1.21 1.2-4-.21-.34a9.51 9.51 0 0 1-1.46-5.2c0-5.26 4.28-9.54 9.55-9.54 2.55 0 4.95.99 6.75 2.79 1.8 1.8 2.79 4.2 2.79 6.74 0 5.26-4.29 9.53-9.57 9.53Zm5.25-7.15c-.29-.14-1.7-.83-1.96-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.9 1.11-.17.19-.33.22-.61.08-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.43-1.72-1.6-2-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.53-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.03 2.82 1.18 3.01c.14.19 2.03 3.09 4.92 4.33.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.12-.26-.19-.55-.33Z"/></svg>
                Book Now on WhatsApp
              </a>
              <a
                href={`tel:${whatsappNumber}`}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.125 1.125 0 0 0-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a.75.75 0 0 1-1.21.053l-1.11-1.335a12.036 12.036 0 0 1-3.598-3.598l-1.335-1.11a.75.75 0 0 1 .053-1.21l1.293-.97c.33-.248.48-.66.417-1.073L7.963 3.6A1.125 1.125 0 0 0 6.872 2.75H5.25A2.25 2.25 0 0 0 3 5v1.75Z"/></svg>
                Call {phoneDisplay}
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 font-semibold px-5 py-3 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
                Email Us
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {services.map((s) => (
                <div key={s.title} className="rounded-xl bg-white/70 backdrop-blur border border-blue-100 p-5 shadow-sm">
                  <div className="text-sm font-medium text-blue-700 bg-blue-50 inline-flex px-3 py-1 rounded-full border border-blue-100">
                    {s.badge}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About Us</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {businessName} delivers clean and reliable bulk water for residential, industrial, and agricultural needs.
                Led by {owner}, we uphold strict purity standards, prompt delivery, and dependable service across all disciplines.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: PRIMARY }}></span> On-time delivery</li>
                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: PRIMARY }}></span> High purity assurance</li>
                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: PRIMARY }}></span> Trained logistics team</li>
                <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: PRIMARY }}></span> Flexible schedules</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1602253057119-44c8b3d68fb5?q=80&w=1200&auto=format&fit=crop"
                alt="Water tanker"
                className="rounded-xl shadow-lg border border-blue-100"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-blue-100 shadow p-4">
                <p className="text-sm text-gray-600">Serving {location} and nearby areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Services Offered</h2>
          <p className="mt-3 text-gray-700">Choose the volume that suits your need.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-blue-100 p-6 bg-white shadow-sm hover:shadow-md transition">
                <div className="text-sm font-semibold text-blue-700 bg-blue-50 inline-flex px-3 py-1 rounded-full border border-blue-100">
                  {s.badge}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-blue-700 font-semibold">
                  Request this service
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Coverage Area</h2>
              <p className="mt-4 text-gray-700">
                Based at {location}. We serve nearby villages, industrial parks, farms, and residential societies in the surrounding region.
              </p>
              <ul className="mt-5 space-y-2 text-gray-700">
                <li>• Residential complexes and independent homes</li>
                <li>• Industrial and construction sites</li>
                <li>• Agricultural and community water points</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] hover:brightness-95 text-white font-semibold px-5 py-3 transition">
                  Book Now on WhatsApp
                </a>
                <a href={`tel:${whatsappNumber}`} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 transition">
                  Call {phoneDisplay}
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-blue-100 shadow-sm bg-white">
              <iframe
                title="Nayara Depot Dahegaon Miskin Map"
                src={googleMapEmbed}
                className="w-full h-[320px] sm:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-3 text-gray-700">We respond quickly during business hours.</p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <a href={`tel:${whatsappNumber}`} className="rounded-xl border border-blue-100 p-5 bg-white hover:shadow-sm transition">
              <div className="text-sm text-gray-600">Phone</div>
              <div className="font-semibold text-gray-900">{phoneDisplay}</div>
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-xl border border-blue-100 p-5 bg-white hover:shadow-sm transition">
              <div className="text-sm text-gray-600">WhatsApp</div>
              <div className="font-semibold text-gray-900">Message us</div>
            </a>
            <a href={`mailto:${email}`} className="rounded-xl border border-blue-100 p-5 bg-white hover:shadow-sm transition">
              <div className="text-sm text-gray-600">Email</div>
              <div className="font-semibold text-gray-900">{email}</div>
            </a>
          </div>
          <div className="mt-8">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition">
              Request Water Supply
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-50">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-lg font-semibold">{businessName}</div>
            <div className="text-sm text-blue-100">{location}</div>
          </div>
          <div className="text-sm text-blue-100 italic text-center">“{slogan}”</div>
          <div className="text-sm text-blue-100">© {new Date().getFullYear()} {owner}</div>
        </div>
      </footer>
    </div>
  )
}

export default App
