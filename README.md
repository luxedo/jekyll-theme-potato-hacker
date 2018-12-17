# jekyll-theme-potato-hacker
[![Gem Version](https://badge.fury.io/rb/jekyll-theme-potato-hacker.svg)](https://badge.fury.io/rb/jekyll-theme-potato-hacker)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


Welcome to your new Jekyll theme! In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes` and your sass in `_sass`. To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

![screenshot](https://raw.githubusercontent.com/luxedo/jekyll-theme-potato-hacker/master/screenshot.png "screenshot")

Check out the [demo](https://luxedo.github.io/jekyll-theme-potato-hacker/)
Check out the [gem](https://rubygems.org/gems/jekyll-theme-potato-hacker)

## Installation

Add this line to your Jekyll site's Gemfile:

```ruby
gem "jekyll-theme-potato-hacker"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-potato-hacker
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-potato-hacker

Or even use the remote theme tag in `_config.yml` if you're using github pages:
```yaml
remote_theme: luxedo/jekyll-theme-potato-hacker
```

## Usage

### Pages

This is a simple theme I made to my portfolio/blog https://luxedo.github.io/
There are four different categories of pages for this template:
* Main page `index.md` in the root.
* Item pages `_items` folder.
* Blog posts `_posts` folder.
* Dropdown pages `_dropdown` folder.

### Dropdown
The dropdown menus are generated based on the [front matter](https://jekyllrb.com/docs/front-matter/) data in the files. Use the `dropdown` attribute to chose where the page will be placed. The items with the highest `priority` will be placed first.
```yaml
---
layout: page
title: dropdown1 item1
description: Test page
dropdown: dropdown1
priority: 1
---
```

### Blog
If you want to use the blog, you need to set `blog: on` inside `_config.yml` and add a `blog.md` file in your root directory:
```yaml
---
layout: blog-index
title: My Blog
description: Test page
---
```

### \_config.yml
Some settings are defined in `_config.yml`. Download the file in this repo
for a complete example.
```yaml
# Useful links
github_username: "<github_username>"
facebook_username: "<facebook_username>"
twitter_username: "<twitter_username>"
linkedin_id: "<linkedin_id>"

# Theme
# theme: jekyll-theme-potato-hacker                 # Uncomment this
# remote_theme: luxedo/jekyll-theme-potato-hacker   # Or this
theme_repository: "https://github.com/luxedo/jekyll-theme-potato-hacker"
theme_base: "dark"       # Theme palette (light | dark)
theme_switch: on         # Show color switch (on | off)

# Extra settings
blog: on                 # Show blog tag and post list (on | off)
avatar: on               # Show avatar (on | off)
avatar_image: "assets/img/avatar.jpg"
avatar_description: "My name is Popotato and I'm a HACKER."
highlighter_theme: monokai  # Theme of the syntax_highlighter [base16 |
                            # colorful | github | gruvbox | molokai |
                            # monokai | pastie | thankful_eyes | tulip ]
toolbar_priority:        # Order of the items in the toolbar (except for blog and home)
  - dropdown2
  - About
  - dropdown1

# Collections
collections:
  dropdown:
    output: true
  items:
    output: true
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/luxedo/jekyll-theme-potato-hacker/issues. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

You theme is setup just like a normal Jelyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html).
