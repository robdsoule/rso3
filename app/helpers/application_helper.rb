module ApplicationHelper

  #Full Title Per Page
  def f_title(page = '')
    base = "RSo3 - Rob Soule"
    if page.empty?
      base
    else
      "#{page} => #{base}"
    end
  end

  def timestamp
    timestamp = Time.now
    formattedtime = timestamp.strftime("%b, %e %Y AT: %H:%M:%S")
    puts "#{formattedtime}"
  end
end
