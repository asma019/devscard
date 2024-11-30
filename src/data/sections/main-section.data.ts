import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Type, Clock, Edit2, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WordCounterApp = () => {
  const [text, setText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Memoized stats calculation to improve performance
  const stats = useMemo(() => {
    const trimmedText = text.trim();

    const words = trimmedText.length > 0
      ? trimmedText.split(/\s+/)
      : [];

    const charactersWithSpaces = text.length;
    const charactersWithoutSpaces = text.replace(/\s/g, '').length;

    const sentences = text.split(/[.!?]+/).filter(sentence =>
      sentence.trim().length > 0
    ).length;

    const paragraphs = text.split(/\n\s*\n/).filter(para =>
      para.trim().length > 0
    ).length;

    return {
      words: words.length,
      characters: charactersWithSpaces,
      charactersWithoutSpaces,
      sentences,
      paragraphs,
      readingTime: Math.ceil(words.length / 200)
    };
  }, [text]);

  // Theme-specific classes
  const bgClass = isDarkMode
    ? 'bg-gray-900 text-gray-100'
    : 'bg-white text-gray-800';

  const cardClass = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-gray-50 border-none';

  const textareaClass = isDarkMode
    ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500'
    : 'bg-transparent border-gray-200 text-gray-800 placeholder-gray-400';

  return (
    <div className={`max-w-4xl mx-auto p-6 min-h-screen ${bgClass} transition-colors duration-300`}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4"
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      <Card className={`shadow-2xl ${bgClass}`}>
        <CardHeader>
          <CardTitle className={`text-2xl font-bold flex items-center justify-between ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Professional Word Counter
            <Badge variant={isDarkMode ? "secondary" : "default"} className="text-sm font-normal">
              Detailed Text Analysis
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-primary/10' : 'bg-primary/5'} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              <div className="relative z-10 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Start writing your text here..."
                  className={`w-full min-h-[300px] p-4 rounded-lg
                    border-2
                    focus:outline-none
                    focus:border-primary/50
                    resize-y
                    transition-all
                    duration-300
                    hover:shadow-sm
                    ${textareaClass}`}
                />
                <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                  <Edit2 className={`w-4 h-4 ${isDarkMode ? 'text-gray-500 group-hover:text-primary' : 'text-gray-400 group-hover:text-primary'} transition-colors`} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {text.length} / 5000
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card className={cardClass}>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: <Type className={`w-6 h-6 ${isDarkMode ? 'text-primary' : 'text-primary'}`} />,
                        label: 'Words',
                        value: stats.words
                      },
                      {
                        icon: <FileText className={`w-6 h-6 ${isDarkMode ? 'text-primary' : 'text-primary'}`} />,
                        label: 'Characters',
                        value: stats.characters
                      },
                      {
                        icon: <BookOpen className={`w-6 h-6 ${isDarkMode ? 'text-primary' : 'text-primary'}`} />,
                        label: 'Sentences',
                        value: stats.sentences
                      },
                      {
                        icon: <Clock className={`w-6 h-6 ${isDarkMode ? 'text-primary' : 'text-primary'}`} />,
                        label: 'Reading Time',
                        value: `${stats.readingTime} min`
                      }
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-4 rounded-lg shadow-sm ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
                      >
                        {stat.icon}
                        <div>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</p>
                          <p className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Separator className={isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} />

              <Card className={cardClass}>
                <CardContent className="p-6">
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                    Advanced Insights
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Paragraphs</span>
                      <span className={`font-medium ${isDarkMode ? 'text-gray-100' : ''}`}>{stats.paragraphs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Avg. Word Length</span>
                      <span className={`font-medium ${isDarkMode ? 'text-gray-100' : ''}`}>
                        {text.length > 0
                          ? (stats.charactersWithoutSpaces / stats.words).toFixed(2)
                          : '0.00'} chars
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WordCounterApp;
