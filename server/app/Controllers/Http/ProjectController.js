"use strict";

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser();
    console.log(user);
    return { msg: "heellooo" };
  }
}

module.exports = ProjectController;
