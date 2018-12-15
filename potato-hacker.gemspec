# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-potato-hacker"
  spec.version       = "1.0.4"
  spec.authors       = ["Luiz Eduardo Amaral"]
  spec.email         = ["luizamaral306@gmail.com"]

  spec.summary       = %q{A theme based on hackers and potatoes.}
  spec.homepage      = "https://github.com/luxedo/jekyll-theme-potato-hacker"
  spec.license       = "GPL-3.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_development_dependency "jekyll", "~> 3.3"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
