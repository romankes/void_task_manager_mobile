import React, {FC} from 'react';

import {Text, ChevronIcon} from '@/components';
import {TouchableOpacity} from 'react-native';
import {ScaleDecorator} from 'react-native-draggable-flatlist';

import {useStyles} from './useStyles';
import {Project} from '@/bus/project';

type TProps = {
  project: Project.Item;

  onPress: () => any;
  onDrag: () => any;
};

export const ProjectCard: FC<TProps> = ({project, onPress, onDrag}) => {
  const {styles} = useStyles();

  return (
    <ScaleDecorator>
      <TouchableOpacity
        onLongPress={onDrag}
        style={styles.wrapper}
        activeOpacity={0.6}
        onPress={onPress}>
        <Text size={16} family="medium">
          {project.title}
        </Text>

        <ChevronIcon color="default" size={24} />
      </TouchableOpacity>
    </ScaleDecorator>
  );
};
