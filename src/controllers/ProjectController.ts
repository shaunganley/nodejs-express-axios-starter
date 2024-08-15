import express from "express";
import {getProject, getProjectById, createProject} from "../services/ProjectService"

export const getAllProjects = async (req: express.Request, res: express.Response): Promise<void> =>
    {
        res.render ('projectList.html', { projects: await getProject() });
    }

export const getSingleProject = async (req: express.Request, res: express.Response): Promise<void> => 
        {
            res.render ('projectDetails.html', {projects: await getProjectById (req.params.id)});
        }

 export const postProjectForm = async (req: express.Request, res: express.Response): Promise<void> => 
        {
            try{
                const id = await createProject(req.body);
                res.redirect('/projects/' + id);
            }
            catch(e)
            {
                res.locals.errormessage = e.message;
                res.render('projectForm.html', req.body);
            }
        
        } 
 export const getProjectForm = async (req: express.Request, res: express.Response): Promise<void> => 
        {
                res.render("projectForm.html")
        }