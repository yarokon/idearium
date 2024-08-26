# Training 7 debrief

## What was great

- Easy to add remote content.
- Remote content syncing.

## What can we improve

- We cannot add a remote as a single file 😢.
- Creating remote conent on default branch dosen't triger branch protection modal.
- **Auto-merge** could be enabled without **Auto-sync**.
- The **Auto-sync** and **Auto-merge** descriptions are hard to understand.
  - Can we connect a non-default branch?
  - Do remote syncs only work for Reunite projects?
  - The name Redocly should be replaced by Reunite.

![img](/images/debrief-7.png)

<hr />

{% admonition type="info" name="" %}
We suggest to keep **Auto-sync** (or maybe rename to **One-way sync**) and replce **Auto-merge** with **Create a pull request** (by default disabled).
{% /admonition %}

Why?

> - Both **Auto-sync** and **Auto-merge** names are confusing together.
> - **Auto-sync** syncs only in one way. I don't know if it's planned, but probably in the future, we can add **Bidirectional sync**. If that's the case, **One-way sync** would be a better name.
> - **Create a pull request** is much more self-descriptive than **Auto-merge**.

<hr />

- It was not simple to find the remote-content docs.
  - For us, [a file structure like this](https://redoc-ly.slack.com/archives/C01D9NU7R4P/p1717765985888739?thread_ts=1717762959.392809&cid=C01D9NU7R4P) would be better (but it's not approved).
  - Add a link to the docs inside the "Connect remote Git" modal.
  - On the "Remote content" page, help icons leads to https://beta-docs.redocly.com/ instead of the remote docs page.
