module.exports = {
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  nodeMailerUser: process.env.NODE_MAILER_USER,
  nodeMailerPass: process.env.NODE_MAILER_PASS,
  whiteList: process.env.WHITELIST.split(' '),
  orderInEmail: process.env.ORDER_IN_EMAIL,
  orderInSender: process.env.ORDER_IN_SENDER,
  serviceAccountKey : {
      type: "service_account",
      project_id: "petalosarteprod",
      private_key_id: "d346bfeceee43e509b8aa143e1845e6070535bb9",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCjNyW+LAepzAQJ\nsIHyiqrBF+izb9akypHKPi8g6KI4TjnSewq0Bn9Dg0JghBbQTkdaqvLlLo5LhJXW\n2kkTwhV+eNQDz+6/U68U/8kqWnGpWQxjUTcoJK/wc64YQtQuch7CAZUsOuWpT9Dc\nZldC+eePZxASe589B61VJEVgwOgGax+yR1mQLCZ/PjV5NJ8rmQOyZ1hgQibTmb8W\n+gWSRTlW9BbsAMfKjbWiZAwiC6WoPpN2IhhfA7AcUXH3iTeFjqePzinsiTotUTBp\nlsJidXbB/frDsRRrlxlWc8PjM3zZ/7I2+yL9htUoPBV60JGZJCVq662/m5ZRD4If\nwbpjVHY3AgMBAAECggEASE0MJ6eqh2GsYjxx/CbISHxWZXKEA4EGvy/3wZy8C7Q/\ncgl2btQ3+QjC1S1+S615d2Ul7zdF6pcjp0cQOzPtQJa22K96RAAGnYdHrj7dfdbI\nIZDfHaXO2HXuJ6onAyIjlO6NjcfTZ8LHM3MUccNxe/l8SavAmRD3DDHil98siXai\nceN1k0npdRoEOr7HtDILk1ROYG6AbQaDaphDf+OzfmTTAkMIN6U2rbzHq+Jfjnk5\nza/j5b83HNPXqBEW/EcpNNX6OGCAOMn0EFFIPXwZ/ga1yXs08NgH3XZJleEaNuOV\n2kU6TM2ZXNSuHryR8ywq605pbq/RqSDI/rnfbw8cTQKBgQDYWPnpaYqiWl5FqIxG\npy23LaQ1d0HCL7Em84KbMwuP/Z6/PHGO6t3qA5+JggdXYn9sg9oo4aKaLcKFi0q+\n4dIUtwdmIZW0MBjR3+mHcXFqRy99HylVc2MRHkH96AFmvDyjJ9OeQ+q4LvPRGAPb\naBh54EvSRVm2F7mZshx6TSFpKwKBgQDBITZE4zelH47G/oP8M6X9OmoM9cVlwonY\nZhkgzU63Ld3ZvefvmDVipqs+OOqRBq/GhtPT+xQ2JejJuYpfLcN7kBelwoqVdTEq\nkQTfNbSAb3XgONBeC8QpHXqa88lwF0PMs1cu/v/mlJtR6drGVvHAzm12+BMp8EZC\nYFTcDAlJJQKBgEOQjgOyHUSUukpA2AYcoa9KRrUX2GZ/pHCIreowJ9VBHHmWs9Qx\nTzqNBR7Zh9dngGnwR4pq5PAHiG9ST/aK6aPkgSAJLwqF1sp8hh7xc70AHDmUKMFx\n9qda7rsP4JgoAzvk7TbI+R2qNCTBvjqgKLyvKp6xX9H5WNJCCJi9S8jfAoGAYgEh\nkfmf3jpScObtQUlQXV2MPYFmp4n9+4NsEvo8jLZI01sMXMhnpuUfFxc46Vl0T5FR\n40uRaRz5sYxnDH+jqItphKNhQhDTX19yEnclXtuw/JS4IFFmPNsJwaIewbP8ot8L\nSfz7DR6yZvH+JBIw4f+fCvU+fFTCwqIxzeyJtcUCgYBwVYoO/4fm/qv5mfo6iH5a\nZZQFr9ovPU2+kO8ZPCz8V3E0pcLVnyvcwhdwLvmgls1qIj2Y7J7PhFKmh/TLePM/\nfAfFam1yGXzmGbt6EHlLVB2bBO8crzK/22CJScoC4Kbt6MrtXaHc+ZNhTR403A7+\nrmpkVrNrRlVyZ2Y+ReJwTQ==\n-----END PRIVATE KEY-----\n",
      client_email: "firebase-adminsdk-x8x8w@petalosarteprod.iam.gserviceaccount.com",
      client_id: "100967400950302846967",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x8x8w%40petalosarteprod.iam.gserviceaccount.com"
    }
}