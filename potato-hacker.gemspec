# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "potato-hacker-jekyll-template"
  spec.version       = "0.3.1"
  spec.authors       = ["Luiz Eduardo Amaral"]
  spec.email         = ["luizamaral306@gmail.com"]

  spec.summary       = %q{A theme based on hackers and potatoes}
  spec.homepage      = "https://github.com/luxedo/potato-hacker-jekyll-template"
  spec.license       = "GPL-3.0"

  spec.post_install_message = <<-MESSAGE
!    The 'potato-hacker-jekyll-template' gem has been deprecated and has been replaced by 'jekyll-theme-potato-hacker'.
!    See: https://rubygems.org/gems/jekyll-theme-potato-hacker
!    And: https://github.com/luxedo/jekyll-theme-potato-hacker
MESSAGE

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_development_dependency "jekyll", "~> 3.3"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
