Gem::Specification.new do |spec|
  spec.name          = 'jekyll-theme-potato-hacker'
  spec.version       = '1.0.5'
  spec.authors       = ['Luiz Eduardo Amaral']
  spec.email         = ['luizamaral306@gmail.com']

  spec.summary       = 'A theme based on hackers and potatoes.'
  spec.homepage      = 'https://github.com/luxedo/jekyll-theme-potato-hacker'
  spec.license       = 'GPL-3.0'

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(/^(assets|_layouts|_includes|_sass|LICENSE|README)/i)
  end

  spec.add_development_dependency 'bundler', '~> 2.5.4'
  spec.add_development_dependency 'jekyll', '~> 3'
  spec.add_development_dependency 'rake', '~> 13'
end
