module ApplicationHelper

  #Full Title Per Page
  def f_title(page = '')
    base = "RSo3 - Rob Soule"
    if page.empty?
      base
    else
      "#{page} | #{base}"
    end
  end
end
