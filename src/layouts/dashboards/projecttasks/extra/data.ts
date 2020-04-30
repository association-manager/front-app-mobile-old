import { ImageSourcePropType } from 'react-native';
import dataJson from './data.json';

// export enum ProjectTaskList {
//   TO_DO = 'A faire',
//   IN_PROGRESS = 'En cours',
//   COMPLETED = 'Terminée',
// }




export class ProjectTask {

  constructor(readonly title: string,
              readonly duration: number,
              readonly description: string,
              readonly level: Object,
              // readonly level: ProjectTaskList,
              readonly image: ImageSourcePropType) {
  }

  get formattedLevel(): string {
    return `${this.level} Test`;
  }

  get formattedDuration(): string {
    return `${this.duration} min`;
  }

  
  // static chestToDo(): ProjectTask {
  //   return new ProjectTask(
  //     'Chest',
  //     55,
  //     ProjectTaskList.TO_DO,
  //     require('../assets/image-training-1.jpg'),
  //   );
  // }

  // static workoutToDo(): ProjectTask {
  //   return new ProjectTask(
  //     'Chest',
  //     55,
  //     ProjectTaskList.TO_DO,
  //     require('../assets/image-training-2.jpg'),
  //   );
  // }

  // static personalizedToDo(): ProjectTask {
  //   return new ProjectTask(
  //     'Personalized ProjectTask',
  //     55,
  //     ProjectTaskList.TO_DO,
  //     require('../assets/image-training-3.jpg'),
  //   );
  // }


  // static toto1(): ProjectTask {
  //   return new ProjectTask(
  //     'Chest',
  //     55,
  //     ProjectTaskList.TO_DO,
  //     require('../assets/image-training-1.jpg'),
  //   );
  // }

  // static toto2(): ProjectTask {
  //   return new ProjectTask(
  //     'Chest',
  //     55,
  //     ProjectTaskList.TO_DO,
  //     require('../assets/image-training-2.jpg'),
  //   );
  // }

  // static toto3(): ProjectTask {
  //   return new ProjectTask(
  //     'Personalized ProjectTask',
  //     55,
  //     ProjectTaskList.TO_DO,
  //     require('../assets/image-training-3.jpg'),
  //   );
  // }


  // static chestInProgress(): ProjectTask {
  //   return new ProjectTask(
  //     'Chest',
  //     55,
  //     ProjectTaskList.IN_PROGRESS,
  //     require('../assets/image-training-4.jpg'),
  //   );
  // }

  // static bicepsInProgress(): ProjectTask {
  //   return new ProjectTask(
  //     'Biceps',
  //     55,
  //     ProjectTaskList.IN_PROGRESS,
  //     require('../assets/image-training-5.jpg'),
  //   );
  // }

  // static personalizedInProgress(): ProjectTask {
  //   return new ProjectTask(
  //     'Personalized ProjectTask',
  //     55,
  //     ProjectTaskList.IN_PROGRESS,
  //     require('../assets/image-training-1.jpg'),
  //   );
  // }

  // static chestCompleted(): ProjectTask {
  //   return new ProjectTask(
  //     'Chest',
  //     55,
  //     ProjectTaskList.COMPLETED,
  //     require('../assets/image-training-2.jpg'),
  //   );
  // }

  // static bicepsCompleted(): ProjectTask {
  //   return new ProjectTask(
  //     'Biceps',
  //     55,
  //     ProjectTaskList.COMPLETED,
  //     require('../assets/image-training-3.jpg'),
  //   );
  // }

  // static workoutCompleted(): ProjectTask {
  //   return new ProjectTask(
  //     'Workout',
  //     55,
  //     ProjectTaskList.COMPLETED,
  //     require('../assets/image-training-4.jpg'),
  //   );
  // }
static projectTaskList(): ProjectTask[] {
  // let projectTaskList: ProjectTask[]; 

 return dataJson.projectTasks.map(projecttask => {
   return new ProjectTask(
    projecttask.title,
    projecttask.duration,
    projecttask.description,
    projecttask.level,
    require(projecttask.image)
 )}
);

  // return projectTaskList
  
}
}