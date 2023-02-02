# Iteration 0 - Github Actions

OK, so this is a bit of an experiment in explaining the process with pointers so that you can dive deeper, please give feedback about what works and what doesn't. I would encourage you to digest this in chunks. Start by reading the TL;DR and giving youself space to explore those links and digest what you are seeing a bit. Then come back to it and work your way through the detailed log, its ok to not understand everything at first glance, no one does. Maybe even throw the links into a tab for later.

## TL;DR

I added a [couple of simple workflows](https://github.com/G3N7/personal-finances/actions) for [Github Actions](https://github.com/features/actions), which is a "build server" for lack of a better term.

- [Production Build and Publish](https://github.com/G3N7/personal-finances/actions/workflows/production-build-and-publish.yml) - This is used to build the app, and distribute/archive any artifacts, like containers you could run in production.
- [Dev Environment Health](https://github.com/G3N7/personal-finances/actions/workflows/dev-environement-health.yml) - Which is used to validate that the dev environement works as expected.

These definitions on a normal team would evolve over time, someone like me might over complicate the modularity out of the gate, whereas a novice might start out with everything in one workflow. Finding a balance is key.

## Detailed

So this will kind of be a condensed version of the experience I had to orient you to what I have done and why. I have 13 years in the industry and I like most people still fall victim to [imposter syndrom](https://www.codingdojo.com/blog/programmer-imposter-syndrome) and thrashing (when you are just trying things at random instead of reading more or going back to square one and testing your mental model). This is meant to show you whats common and how to approach solving things.

Some orientation, I deeply believe in whats called "infrastructure-as-code" which basically means instead of going onto a computer and setting things up manually, you should write code, or even better create configuration files that a tool uses to create your infrastructure.

To this end you will find the [.devcontainer folder](https://github.com/G3N7/personal-finances/tree/main/.devcontainer) which drives the local environment via configuration, the `Dockerfile` defines a virutal computer we will use, and the `docker-compose.yml` defines a set of services that will run when we open VS Code.

We also have have a [.github folder](https://github.com/G3N7/personal-finances/tree/main/.github) which drives the Github Actions to automate things like validation and deployment of our code.

If you will go to the [Dev Environment Health](https://github.com/G3N7/personal-finances/actions/workflows/dev-environement-health.yml) actions page and page to the end, you will see that I started simple, and imediately noticed a problem. The [build was taking 22min](https://github.com/G3N7/personal-finances/actions/runs/3012794305) so I had to cancel it.

I then realized that I was basically sitting a console watching the active log, instead of firing it off and then checking for the service to be up and running before I continue. After some trial and error I landed on [this solution](https://github.com/G3N7/personal-finances/blob/main/.github/workflows/dev-environement-health.yml#L28-L36). Bascially following a tutorial I found online that was close to what I was trying to do [Wait until Your Dockerized Database Is Ready before Continuing
](https://www.youtube.com/watch?v=jqqIQoSpxxA).

After I got the environement up and running, I did my first verification, [checking that the api server was up](https://github.com/G3N7/personal-finances/blob/main/.github/workflows/dev-environement-health.yml#L38-L39). `curl` is a tool that makes a request like your browser would, but in a console and pipes it out as text. `|` takes the output of the thing on the left and inputs it to the thing on the right. `grep` is a console tool that says find lines containing `elk` and you can see it found ["name" : "elk"](https://github.com/G3N7/personal-finances/runs/8245490839?check_suite_focus=true#step:5:8)

I also realized I should [add a step that displays the log information](https://github.com/G3N7/personal-finances/blob/main/.github/workflows/dev-environement-health.yml#L58-L60) so its easier to debug/troubleshoot. You can see its [output here](https://github.com/G3N7/personal-finances/runs/8245490839?check_suite_focus=true#step:6:125).

You can also see that I got a bit ambitious for almost 3am, and tried to add [starting the node apps](https://github.com/G3N7/personal-finances/blob/main/.github/workflows/dev-environement-health.yml#L31-L32) and [checking that the kibana server is up](https://github.com/G3N7/personal-finances/blob/main/.github/workflows/dev-environement-health.yml#L41-L54) but realized I was tired and thrashing so will come back to that another day. Its important to think about is this important to the goals I have and move on if there is something else that is more of a priority, or in this case, its good enough for now that it checks the elasticsearch api is up. So I commented it out, and will come back to it, maybe never :D if its never a problem.

## Things to notice

- [Production Build and Publish](https://github.com/G3N7/personal-finances/actions/workflows/production-build-and-publish.yml) remained stable while I was thrashing about in [Dev Environment Health](https://github.com/G3N7/personal-finances/actions/workflows/dev-environement-health.yml).
- I failed a lot with [Dev Environment Health](https://github.com/G3N7/personal-finances/actions/workflows/dev-environement-health.yml), in fact I may never get some of the stuff I set out to do tonight done, but thats ok, as long as it doesnt turn out to be important. If it does I will revisit. Perfection can be the enemy of the good, or profession is always about finding the best balance between cost in time and value of our work.
- Infrastructure-as-code is BADASS!
- This is written in [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github), a cool simple syntax for doing basic document structure. You can even [write books](gitbook.com) using it.
