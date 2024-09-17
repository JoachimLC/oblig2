
type HeaderProps = {
    student: string;
    degree: string;
    points: number;
  };
  
  export default function Header({ student, degree, points }: HeaderProps) {
    return (
      <header className="grid-article-item">
        <h1>{student}</h1>
        <p>Degree: {degree}</p>
        <p>Points: {points}</p>
      </header>
    );
  }