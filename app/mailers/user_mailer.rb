class UserMailer < ApplicationMailer
  default from: "Games Hub"

  def contact_form(email, name, message)
    @message = message
    mail( to: 'cfgameshub@gmail.com',
    subject: "A new contact form message from #{name}, #{email}")
  end

  def welcome(user)
    @appname = "Games Hub"
    mail(to: user.email,
    subject: "Welcome to #{@appname}!")
  end
end
