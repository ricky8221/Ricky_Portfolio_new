interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updated: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference"
    };
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Social extends SanityBody {
  _type: "socials";
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name; string;
    phoneNumber: string;
    profilePic: Image
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Experience extends SanityBody {
    _type: "experiences";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentWorkingHere: boolean;
    jobTitle: string;
    points:string[];
    technologies: Technology[];
}